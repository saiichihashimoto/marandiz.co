import Fuse from 'fuse.js';
import React, { Fragment, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useDebounce } from 'use-debounce';
import AdBlocks from '../AdBlocks';

// Description of options: https://fusejs.io/
const searchOptions = {
	keys:      ['name'],
	threshold: 0.6,
	distance:  100,
};

function App({ googleSheets: { rows } }) {
	const [searchTerm, setSearchTerm] = useState('');
	const [debouncedSearchTerm] = useDebounce(searchTerm, 480);

	const ads = debouncedSearchTerm.trim() ?
		(new Fuse(rows, searchOptions)).search(debouncedSearchTerm) :
		rows;

	return (
		<Fragment>
			<Helmet>
				<title>Pinterest Ad Examples</title>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				<meta name="theme-color" content="#000000" />
			</Helmet>
			<input autoFocus type="text" value={searchTerm} onChange={({ target: { value } }) => setSearchTerm(value)} />
			<div>
				<button type="button" onClick={() => setSearchTerm('Marco')}>Marco</button>
				<button type="button" onClick={() => setSearchTerm('Shayan')}>Shayan</button>
			</div>
			<AdBlocks ads={ads} />
		</Fragment>
	);
}

export default App;
