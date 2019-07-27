import React from 'react';
import classes from 'classnames';

import styles from './ThreadBlocks.module.scss';

const { rows } = JSON.parse(document.querySelector('#googleSheets').innerHTML);

const threads = rows
	.map(({ timestamp, image, ...thread }) => ({
		...thread,
		image:     image.replace(/^https:\/\/drive\.google\.com\/open\?id=(.*)$/u, 'https://drive.google.com/uc?id=$1'),
		timestamp: new Date(timestamp),
	}))
	.sort((a, b) => b.timestamp - a.timestamp);

function ThreadBlocks() {
	return (
		<>
			<h2 className={styles.header}>Content + Press</h2>
			<div className={styles.threads}>
				<div className={classes(styles.thread, styles.featured)}>Hi</div>
				{threads.map(({ id, image, contenttitle, article, twitter, medium }) => (
					<div key={id} className={styles.thread}>
						<div className={styles.image} style={{ backgroundImage: `url(${image})` }} />
						<div className={styles.content}>
							<h2 className={styles.title}>
								{contenttitle}
							</h2>
							<span className={styles.linksHeader}>Read On:</span>
							<div className={styles.links}>
								{article && <a className={styles.link} href={article} target="_blank" rel="noopener noreferrer">Article →</a>}
								{twitter && <a className={styles.link} href={twitter} target="_blank" rel="noopener noreferrer">Twitter →</a>}
								{medium && <a className={styles.link} href={medium} target="_blank" rel="noopener noreferrer">Medium →</a>}
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
}

export default ThreadBlocks;
