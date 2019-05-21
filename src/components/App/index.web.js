import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import AdBlocks from '../AdBlocks';

function App({ googleSheets: { rows: ads = [] } }) {
	return (
		<Fragment>
			<Helmet>
				<title>Pinterest Ad Examples</title>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				<meta name="theme-color" content="#000000" />
			</Helmet>
			<AdBlocks ads={ads} />
		</Fragment>
	);
}

export default App;
