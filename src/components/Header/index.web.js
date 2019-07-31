import React from 'react';

import { email, linkedInHandle, mediumHandle, twitterHandle } from '../constants';

import styles from './Header.module.scss';

function Header() {
	return (
		<div className={styles.hero}>
			<div className={styles.navigation}>
				<h1 className={styles.title}>Marandiz + Co.</h1>
				<div className={styles.links}>
					<a className={styles.cta} href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">Contact</a>
					<a className={styles.link} href={`https://twitter.com/${twitterHandle}`} target="_blank" rel="noopener noreferrer">Twitter</a>
					<a className={styles.link} href={`https://medium.com/@${mediumHandle}`} target="_blank" rel="noopener noreferrer">Medium</a>
					<a className={styles.link} href={`https://www.linkedin.com/in/${linkedInHandle}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
				</div>
			</div>
			<div className={styles.spacer} />
			<div className={styles.headerContainer}>
				<h1 className={styles.header}>
					We work with executive leadership at DTC companies on brand, digital
					product, and marketing.
				</h1>
			</div>
		</div>
	);
}

export default Header;
