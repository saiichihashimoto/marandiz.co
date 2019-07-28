import React from 'react';
import { Helmet } from 'react-helmet';

import Endorsements from '../Endorsements';
import Footer from '../Footer';
import Header from '../Header';
import Offerings from '../Offerings';
import ThreadBlocks from '../ThreadBlocks';

import styles from './App.module.scss';

function App() {
	return (
		<div className={styles.app}>
			<Helmet defaultTitle="Marandiz & Co." titleTemplate="%s | Marandiz & Co.">
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				<meta name="theme-color" content="#000000" />
				<meta property="og:site_name" content="Marandiz & Co." />
				<link rel="shortcut icon" href={`${process.env.PUBLIC_URL}/favicon.ico`} />
				<link rel="manifest" href={`${process.env.PUBLIC_URL}/manifest.json`} />
				<link rel="apple-touch-icon" sizes="180x180" href={`${process.env.PUBLIC_URL}/apple-touch-icon.png`} />
				<link rel="icon" type="image/png" sizes="32x32" href={`${process.env.PUBLIC_URL}/favicon-32x32.png`} />
				<link rel="icon" type="image/png" sizes="16x16" href={`${process.env.PUBLIC_URL}/favicon-16x16.png`} />
				<link rel="manifest" href={`${process.env.PUBLIC_URL}/site.webmanifest`} />
				<link rel="stylesheet" href="https://use.typekit.net/mhv2apy.css" />
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
