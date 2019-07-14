import React from 'react';
import classnames from 'classnames';

import styles from './Endorsements.module.scss';

function Endorsements() {
	return (
		<div className={styles.endorsements}>
			<div className={styles.endorsementContainer}>
				<img className={classnames(styles.endorsement, styles.buffer)} alt="Wow, it's buffer" />
			</div>
			<div className={styles.endorsementContainer}>
				<img className={classnames(styles.endorsement, styles.instagram)} alt="Wow, it's instagram" />
			</div>
			<div className={styles.endorsementContainer}>
				<img className={classnames(styles.endorsement, styles.facebook)} alt="Wow, it's facebook" />
			</div>
		</div>
	);
}

export default Endorsements;
