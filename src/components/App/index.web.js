import React from 'react';
import { Helmet } from 'react-helmet';
import logo from './logo.svg';
import styles from './App.module.css';

const App = () => (
	<div className={styles.app}>
		<Helmet>
			<title>Pinterest Ad Examples</title>
			<meta charset="utf-8" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1, shrink-to-fit=no" />
			<meta name="theme-color" content="#000000" />
		</Helmet>
		<header className={styles.appHeader}>
			<img src={logo} className={styles.appLogo} alt="logo" />
			<p>
				Edit <code>src/App.js</code> and save to reload.
			</p>
			<a
				className={styles.appLink}
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer">
				Learn React
			</a>
		</header>
	</div>
);

export default App;
