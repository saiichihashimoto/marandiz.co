// eslint-disable-next-line import/no-extraneous-dependencies
const slugify = require('slugify');

const input = [];

process.stdin.setEncoding('utf8');

process.stdin.on('data', (chunk) => input.push(chunk));

process.stdin.on('end', () => {
	const { feed: { entry: raw = [] } } = JSON.parse(input.join(''));
	const entries = raw
		.filter(({ 'gsx$url': url }) => url)
		.map(({ 'gsx$url': { $t: url }, ...row }) => ({ ...row, gsx$url: { $t: slugify(url, { lower: true }) } }))
		.map((row) => Object.entries(row)
			.filter(([key, { $t: value }]) => key.startsWith('gsx$') && value)
			.map(([key, { $t: value }]) => [
				key.substr(4),
				!Number.isNaN(Number(value)) ? Number(value) : value,
			]));

	// eslint-disable-next-line no-console
	console.log(JSON.stringify({
		columns: Object.fromEntries(
			Object.entries(
				entries.reduce((acc, entry) => {
					entry.forEach(([key, value]) => {
						acc[key] = acc[key] || {};
						acc[key][value] = true;
					});
					return acc;
				}, {}),
			)
				.map(([key, value]) => [key, Object.keys(value)]),
		),
		rows: entries.map((row) => Object.fromEntries(row)),
	}));
});
