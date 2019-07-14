import React from 'react';
import StackGrid from 'react-stack-grid';
import styles from './ThreadBlocks.module.scss';

const { rows: threads } = JSON.parse(document.querySelector('#googleSheets').innerHTML);

function ThreadBlocks() {
	return (
		<StackGrid
			columnWidth={260}
			gutterWidth={0}
			gutterHeight={0}>
			{threads.map((thread) => (
				<div key={thread.id} className={styles.threadContainer}>
					<a className={styles.thread} href={thread.url} target="_blank" rel="noopener noreferrer">
						<pre>{JSON.stringify(thread, null, 4)}</pre>
					</a>
				</div>
			))}
		</StackGrid>
	);
}

export default ThreadBlocks;
