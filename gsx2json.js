#!/usr/bin/env node
const fs = require('fs').promises;

const request = require('request-promise-native');

async function gsx2json() {
	const { feed: { entry: raw = [] } } = await request({
		uri:  `https://spreadsheets.google.com/feeds/list/${process.env.GOOGLE_SHEETS_ID}/1/public/values?alt=json`,
		json: true,
	});

	const rawFixed = raw.map(({
		id:            { $t: id },
		gsx$image:     { $t: image },
		gsx$timestamp: { $t: timestamp },
		...row
	}) => ({
		gsx$id:        { $t: id.replace(/^.*\//u, '') },
		gsx$image:     { $t: image.replace(/^https:\/\/drive\.google\.com\/open\?id=(.*)$/u, 'https://drive.google.com/uc?id=$1') },
		gsx$timestamp: { $t: (new Date(timestamp)).valueOf() },
		...row,
	}));

	const imagesRedirected = process.argv.some((arg) => arg === '--local')
		? rawFixed
		: await Promise.all(rawFixed.map(async ({
			gsx$image: { $t: image } = {},
			...row
		}) => {
			if (!image) {
				return row;
			}

			let newImage = image;

			try {
				const { request: { href } } = await request(image, {
					resolveWithFullResponse: true,
				});

				newImage = href;
			} catch (err) {
				// eslint-disable-next-line no-console
				console.warn('Couldn\'t redirect the image, using original', err);

				return {
					...row,
					gsx$image: { $t: image },
				};
			}

			if (newImage.startsWith('https://accounts.google.com/ServiceLogin')) {
				throw new Error(`${image} needs it's "Link Sharing" settings set to "Public on the web". Images will not work otherwise!`);
			}

			return {
				...row,
				gsx$image: { $t: newImage },
			};
		}));

	const entries = imagesRedirected.map(
		(row) => Object.entries(row)
			.map(([key, { $t: value }]) => [key, value])
			.filter(([key, value]) => key.startsWith('gsx$') && value !== '')
			.map(([key, value]) => [key.substr(4), value])
			.map(([key, value]) => [
				key,
				Number.isNaN(Number(value))
					? value
					: Number(value),
			])
	);

	const json = {
		columns2: Object.fromEntries(
			Object.entries(
				entries.reduce((acc, entry) => entry.reduce((acc2, [key, value]) => ({
					...acc2,
					[key]: {
						...acc2[key],
						[value]: true,
					},
				}), acc), {})
			)
				.map(([key, value]) => [key, Object.keys(value)])
		),
		rows: entries.map((row) => Object.fromEntries(row)),
	};

	let filehandle;

	try {
		filehandle = await fs.open('googlesheets.json', 'w');

		await filehandle.writeFile(JSON.stringify(json));
	} finally {
		await filehandle.close();
	}
}

gsx2json()
	// eslint-disable-next-line promise/prefer-await-to-callbacks
	.catch((err) => {
		// eslint-disable-next-line no-console
		console.error(err);

		process.exit(1);
	});
