const fs = require('fs').promises;

const request = require('request-promise-native');

async function gsx2json() {
	const { feed: { entry: raw = [] } } = await request({
		uri:  `https://spreadsheets.google.com/feeds/list/${process.env.GOOGLE_SHEETS_ID}/1/public/values?alt=json`,
		json: true,
	});

	const entries = raw.map((row) => Object.entries(row)
		.map(([key, { $t: value }]) => (
			key === 'id'
				? ['gsx$id', value.replace(/^.*\//u, '')]
				: [key, value]
		))
		.filter(([key, value]) => key.startsWith('gsx$') && value !== '')
		.map(([key, value]) => [key.substr(4), value])
		.map(([key, value]) => [
			key,
			Number.isNaN(Number(value))
				? value
				: Number(value),
		]));

	const json = {
		columns: Object.fromEntries(Object.entries(entries.reduce((acc, entry) => {
			entry.forEach(([key, value]) => {
				acc[key] = acc[key] || {};
				(Array.isArray(value) ? value : [value]).forEach((val) => {
					acc[key][val] = true;
				});
			});

			return acc;
		}, {}))
			.map(([key, value]) => [key, Object.keys(value)])),
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

gsx2json();
