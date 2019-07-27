import React from 'react';

import styles from './Header.module.scss';

function Header() {
	return (
		<>
			<div className={styles.hero}>
				<div className={styles.navigation}>
					<div className={styles.logo} />
					<a className={styles.cta} href="https://google.com" target="_blank" rel="noopener noreferrer">Contact</a>
				</div>
				<div className={styles.links}>
					<a className={styles.link} href="https://google.com" target="_blank" rel="noopener noreferrer">Twitter</a>
					<a className={styles.link} href="https://google.com" target="_blank" rel="noopener noreferrer">Medium</a>
					<a className={styles.link} href="https://google.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
				</div>
				<div className={styles.spacer} />
				<div className={styles.headerContainer}>
					<h1 className={styles.header}>
						We work with executive leadership of DTC companies on marketing product.
					</h1>
				</div>
			</div>
		</>
	);
}

export default Header;
