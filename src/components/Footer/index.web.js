import React from 'react';

import SubscribeInput from '../SubscribeInput';

import styles from './Footer.module.scss';

function Footer() {
	return (
		<div className={styles.container}>
			<div className={styles.getInTouch}>
				<h2 className={styles.header}>Get in touch</h2>
				<p className={styles.text}>
					Don’t be the last to know. Subscibe to our list and get the latest updates in
					all things DTC.
				</p>
				<SubscribeInput
					className={styles.inputContainer}
					inputClassName={styles.input}
					submitClassName={styles.submit}
				/>
			</div>
			<div className={styles.connect}>
				<h2 className={styles.header}>Connect</h2>
				<a className={styles.link} href="https://google.com" target="_blank" rel="noopener noreferrer">Twitter</a>
				<a className={styles.link} href="https://google.com" target="_blank" rel="noopener noreferrer">Medium</a>
				<a className={styles.link} href="https://google.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
			</div>
		</div>
	);
}

export default Footer;
