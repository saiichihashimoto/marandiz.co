import React, { useEffect, useMemo, useRef, useState } from 'react';
import classes from 'classnames';

import LazyImage from '../LazyImage';
import SubscribeInput from '../SubscribeInput';

import styles from './ThreadBlocks.module.scss';

const { rows } = JSON.parse(document.querySelector('#googleSheets').innerHTML);

const unfilteredThreads = rows.sort((a, b) => b.timestamp - a.timestamp);

function ThreadBlocks() {
	const [filter, setFilter] = useState(null);
	const [headerAtTop, setHeaderAtTop] = useState(false);
	const containerRef = useRef();

	const toggleFilter = (newFilter) => {
		if (headerAtTop) {
			window.scrollTo(0, containerRef.current.offsetTop);
		}
		setFilter(filter !== newFilter && newFilter);
	};

	const threads = useMemo(
		() => (
			filter
				? unfilteredThreads.filter((thread) => Boolean(thread[filter]))
				: unfilteredThreads
		),
		[filter]
	);

	useEffect(() => {
		function onScroll() {
			setHeaderAtTop(window.pageYOffset > containerRef.current.offsetTop);
		}

		window.addEventListener('scroll', onScroll);

		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<div className={styles.container} ref={containerRef}>
			<div className={classes(styles.heading, { [styles.withShadow]: headerAtTop })}>
				<div className={styles.fadeAway} />
				<h2 className={styles.header}>
					Content + Press
				</h2>
				<div className={styles.actions}>
					<div className={styles.filters}>
						<button
							className={classes(styles.filter, { [styles.selected]: filter === 'article' })}
							type="button"
							onClick={() => toggleFilter('article')}
						>
							Article
						</button>
						<button
							className={classes(styles.filter, { [styles.selected]: filter === 'twitter' })}
							type="button"
							onClick={() => toggleFilter('twitter')}
						>
							Twitter
						</button>
						<button
							className={classes(styles.filter, { [styles.selected]: filter === 'medium' })}
							type="button"
							onClick={() => toggleFilter('medium')}
						>
							Medium
						</button>
					</div>
					{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
					<label className={styles.label}>
						Get notified when new content comes out:
						<SubscribeInput
							className={styles.inputContainer}
							inputClassName={styles.input}
							submitClassName={styles.submit}
						/>
					</label>
				</div>
			</div>
			<div className={styles.threads}>
				{threads.map(({ id, image, contenttitle, article, twitter, medium }, index) => (
					<div
						key={id}
						className={classes(styles.thread, { [styles.featured]: !index })}
					>
						<LazyImage className={styles.image} src={image} alt={contenttitle} />
						<div className={styles.content}>
							<div className={styles.topSpacer} />
							<h2 className={styles.title}>
								{contenttitle}
							</h2>
							<div className={styles.bottomSpacer} />
							<span className={styles.linksHeader}>Links:</span>
							<div className={styles.links}>
								{article && <a className={styles.link} href={article} target="_blank" rel="noopener noreferrer">Article</a>}
								{twitter && <a className={styles.link} href={twitter} target="_blank" rel="noopener noreferrer">Twitter</a>}
								{medium && <a className={styles.link} href={medium} target="_blank" rel="noopener noreferrer">Medium</a>}
							</div>
						</div>
					</div>
				))}
				<div className={styles.spacer} />
			</div>
		</div>
	);
}

export default ThreadBlocks;
