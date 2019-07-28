import React from 'react';
import classes from 'classnames';

import styles from './SubscribeInput.module.scss';

function SubscribeInput({ className, inputClassName, submitClassName }) {
	return (
		<div className={classes(styles.container, className)}>
			<input className={classes(styles.input, inputClassName)} type="email" placeholder="email" />
			<button className={classes(styles.submit, submitClassName)} type="submit">Subscribe</button>
		</div>
	);
}

export default SubscribeInput;
