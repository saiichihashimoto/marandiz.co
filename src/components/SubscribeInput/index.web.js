import React, { useState } from 'react';
import classes from 'classnames';

import styles from './SubscribeInput.module.scss';

function SubscribeInput({ className, inputClassName, submitClassName }) {
	const [done, setDone] = useState(false);

	return (
		<form
			className={classes(styles.form, className)}
			action="https://marandiz.us3.list-manage.com/subscribe/post"
			method="POST"
			target="_blank"
			onSubmit={(event) => {
				if (done) {
					event.preventDefault();

					return;
				}

				setTimeout(() => setDone(true));
			}}
		>
			{done
				? <div className={styles.success}>Talk to you later</div>
				: (
					<>
						<input type="hidden" name="u" value="d3f5c8b6bb2997b1266e10f72" />
						<input type="hidden" name="id" value="f4f47cedb7" />
						<input
							required
							className={classes(styles.input, inputClassName)}
							type="email"
							name="MERGE0"
							placeholder="email"
						/>
						<button className={classes(styles.submit, submitClassName)} type="submit">
							Subscribe
						</button>
					</>
				)}
		</form>
	);
}

export default SubscribeInput;
