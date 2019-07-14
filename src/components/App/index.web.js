import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import Endorsements from '../Endorsements';
import Header from '../Header';
import Offerings from '../Offerings';
import ThreadBlocks from '../ThreadBlocks';

function App() {
	return (
		<Fragment>
			<Helmet defaultTitle="marandiz.co" titleTemplate="%s | marandiz.co">
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				<meta name="theme-color" content="#000000" />
				<meta property="og:site_name" content="Pinterest Ad Examples" />
				<link rel="shortcut icon" href={`${process.env.PUBLIC_URL}/favicon.ico`} />
				<link rel="manifest" href={`${process.env.PUBLIC_URL}/manifest.json`} />
				<link rel="apple-touch-icon" sizes="180x180" href={`${process.env.PUBLIC_URL}/apple-touch-icon.png`} />
				<link rel="icon" type="image/png" sizes="32x32" href={`${process.env.PUBLIC_URL}/favicon-32x32.png`} />
				<link rel="icon" type="image/png" sizes="16x16" href={`${process.env.PUBLIC_URL}/favicon-16x16.png`} />
				<link rel="manifest" href={`${process.env.PUBLIC_URL}/site.webmanifest`} />
				{/* DON'T PUT FONTS HERE! LOOK HERE https://github.com/saiichihashimoto/marandiz.co/blob/master/src/index.css */}
			</Helmet>
			<Header />
			<Offerings />
			<Endorsements />
			<ThreadBlocks />
		</Fragment>
	);
}

export default App;
