import React from 'react';
import classnames from 'classnames';

import styles from './Endorsements.module.scss';

function Endorsements() {
	return (
		<div className={styles.container}>
			<h2 className={styles.header}>
				Check out our friends
			</h2>
			<div className={styles.endorsements}>
				<img className={classnames(styles.endorsement, styles.buffer)} alt="Wow, it's buffer" />
				<img className={classnames(styles.endorsement, styles.instagram)} alt="Wow, it's instagram" />
				<img className={classnames(styles.endorsement, styles.facebook)} alt="Wow, it's facebook" />
			</div>
		</div>
	);
}

export default Endorsements;
