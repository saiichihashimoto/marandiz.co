import React from 'react';
import classes from 'classnames';

import twoPM from './2pm.png';
import atlas from './atlas.png';
import buffer from './buffer.png';
import styles from './Endorsements.module.scss';

function Endorsements() {
	return (
		<>
			<h2 className={styles.header}>
				Check out our friends
			</h2>
			<div className={styles.endorsements}>
				<img className={styles.endorsement} alt="Atlas Coffee Club" src={atlas} />
				<img className={classes(styles.endorsement, styles.buffer)} alt="Buffer" src={buffer} />
				<img className={styles.endorsement} alt="2PM" src={twoPM} />
			</div>
		</>
	);
}

export default Endorsements;
