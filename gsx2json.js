const input = [];

process.stdin.setEncoding('utf8');

process.stdin.on('data', (chunk) => input.push(chunk));

process.stdin.on('end', () => {
	const { feed: { entry: raw = [] } } = JSON.parse(input.join(''));

	const entries = raw.map((row) => (
		Object.entries(row)
			.map(([key, { $t: value }]) => (
				(key === 'id') ?
					['gsx$id', value.replace(/^.*\//, '')] :
					[key, value]
			))
			.filter(([key, value]) => key.startsWith('gsx$') && value !== '')
			.map(([key, value]) => [key.substr(4), value])
			.map(([key, value]) => [
				key,
				!Number.isNaN(Number(value)) ?
					Number(value) :
					value,
			])
			.map(([key, value]) => [
				key,
				(key === 'tags') ?
					value.split(',') :
					value,
			])
	));

	// eslint-disable-next-line no-console
	console.log(JSON.stringify({
		columns: Object.fromEntries(
			Object.entries(
				entries.reduce((acc, entry) => {
					entry.forEach(([key, value]) => {
						acc[key] = acc[key] || {};
						(Array.isArray(value) ? value : [value]).forEach((val) => {
							acc[key][val] = true;
						});
					});
					return acc;
				}, {}),
			)
				.map(([key, value]) => [key, Object.keys(value)]),
		),
		rows: entries.map((row) => Object.fromEntries(row)),
	}, null, 4));
});
