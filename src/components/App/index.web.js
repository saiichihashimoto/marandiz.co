/* eslint react/no-array-index-key: 0 */
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import AdBlock from '../AdBlock';

const App = ({ googleSheets: { rows: ads = [] } }) => (
	<Fragment>
		<Helmet>
			<title>Pinterest Ad Examples</title>
			<meta charset="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
			<meta name="theme-color" content="#000000" />
		</Helmet>
		{ads.map((ad, index) => <AdBlock key={index} ad={ad} />)}
	</Fragment>
);

export default App;
