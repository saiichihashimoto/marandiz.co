import React from 'react';
import StackGrid from 'react-stack-grid';
import { Link } from 'react-router-dom';
import styles from './AdBlocks.module.scss';

function AdBlock({ ads = [] }) {
	return (
		<StackGrid
			columnWidth={260}
			gutterWidth={0}
			gutterHeight={0}>
			{ads.map((ad) => (
				<div key={ad.name} className={styles.blockContainer}>
					<Link className={styles.block} to={`/${ad.name}`}>
						<pre>{JSON.stringify(ad, null, 4)}</pre>
					</Link>
				</div>
			))}
		</StackGrid>
	);
}

export default AdBlock;
