import React from 'react';
import { Helmet } from 'react-helmet';

import styles from './Header.module.scss';

function Header() {
	return (
		<div className={styles.header}>
			<Helmet>
				<body className={styles.bodyBackground} />
			</Helmet>
			<div className={styles.logo} />
			<div className={styles.description}>
				Here's a description of what I do.<br />
				Work with me<br />
				Check out my content
			</div>
		</div>
	);
}

export default Header;
