import React from 'react';

import SubscribeInput from '../SubscribeInput';
import { linkedInHandle, mediumHandle, twitterHandle } from '../constants';

import styles from './Footer.module.scss';

function Footer() {
	return (
		<div className={styles.container}>
			<div className={styles.stayInTouch}>
				<h2 className={styles.header}>Stay in touch</h2>
				<p className={styles.text}>
					Don’t be the last to know. Subscribe to our list to get the latest updates on
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
				<a className={styles.link} href={`https://twitter.com/${twitterHandle}`} target="_blank" rel="noopener noreferrer">Twitter</a>
				<a className={styles.link} href={`https://medium.com/@${mediumHandle}`} target="_blank" rel="noopener noreferrer">Medium</a>
				<a className={styles.link} href={`https://www.linkedin.com/in/${linkedInHandle}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
			</div>
		</div>
	);
}

export default Footer;
