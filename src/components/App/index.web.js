import React from 'react';
import { Helmet } from 'react-helmet';

import Endorsements from '../Endorsements';
import Footer from '../Footer';
import Header from '../Header';
import Offerings from '../Offerings';
import ThreadBlocks from '../ThreadBlocks';
import { title, description, twitterHandle } from '../constants';

import styles from './App.module.scss';

function App() {
	return (
		<div className={styles.app}>
			<Helmet defaultTitle={title} titleTemplate={`%s | ${title}`}>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				<meta name="theme-color" content="#000000" />

				<link rel="apple-touch-icon" sizes="180x180" href={`${process.env.PUBLIC_URL}/apple-touch-icon.png`} />
				<link rel="icon" type="image/png" sizes="16x16" href={`${process.env.PUBLIC_URL}/favicon-16x16.png`} />
				<link rel="icon" type="image/png" sizes="32x32" href={`${process.env.PUBLIC_URL}/favicon-32x32.png`} />
				<link rel="manifest" href={`${process.env.PUBLIC_URL}/manifest.json`} />
				<link rel="manifest" href={`${process.env.PUBLIC_URL}/site.webmanifest`} />
				<link rel="shortcut icon" href={`${process.env.PUBLIC_URL}/favicon.ico`} />

				<meta name="description" content={description} />

				<meta property="og:site_name" content={title} />
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />

				<meta name="twitter:site" content={`@${twitterHandle}`} />
				<meta name="twitter:creator" content={`@${twitterHandle}`} />
			</Helmet>
			<Header />
			<div className={styles.triangleBackground}>
				<Offerings />
				<Endorsements />
			</div>
			<ThreadBlocks />
			<Footer />
		</div>
	);
}

export default App;
