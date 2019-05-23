import Fuse from 'fuse.js';
import React from 'react';
import StackGrid from 'react-stack-grid';
import { Link } from 'react-router-dom';
import styles from './AdBlocks.module.scss';

// Description of options: https://fusejs.io/
const searchOptions = {
	keys:      ['name'],
	threshold: 0.6,
	distance:  100,
};

function AdBlocks({ ads = [], searchTerm = '' }) {
	const filteredAds = searchTerm.trim() ?
		(new Fuse(ads, searchOptions)).search(searchTerm) :
		ads;

	return (
		<StackGrid
			columnWidth={260}
			gutterWidth={0}
			gutterHeight={0}>
			{filteredAds.map((ad) => (
				<div key={ad.url} className={styles.blockContainer}>
					<Link className={styles.block} to={`/${ad.url}`}>
						<div>Ad Block</div>
						<pre>{JSON.stringify(ad, null, 4)}</pre>
					</Link>
				</div>
			))}
		</StackGrid>
	);
}

export default AdBlocks;
