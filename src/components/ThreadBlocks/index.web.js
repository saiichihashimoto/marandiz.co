import React, { Fragment, useState } from 'react';
import StackGrid from 'react-stack-grid';
import classnames from 'classnames';

import styles from './ThreadBlocks.module.scss';

const {
	columns: {
		tags: allTags = [],
	},
	rows: threads,
} = JSON.parse(document.querySelector('#googleSheets').innerHTML);

function ThreadBlocks() {
	const [selectedTag, setTag] = useState(null);

	const filteredThreads = selectedTag ?
		threads.filter(({ tags = [] }) => tags.includes(selectedTag)) :
		threads;

	return (
		<Fragment>
			{allTags.map((tag) => (
				<span
					key={tag}
					className={classnames(styles.tag, { [styles.selected]: selectedTag === tag })}
					onClick={() => setTag(selectedTag === tag ? null : tag)}>
					{tag}
				</span>
			))}
			<StackGrid
				columnWidth={260}
				gutterWidth={0}
				gutterHeight={0}>
				{filteredThreads.map((thread) => (
					<div key={thread.id} className={styles.threadContainer}>
						<a className={styles.thread} href={thread.url} target="_blank" rel="noopener noreferrer">
							<pre>{JSON.stringify(thread, null, 4)}</pre>
						</a>
					</div>
				))}
			</StackGrid>
		</Fragment>
	);
}

export default ThreadBlocks;
