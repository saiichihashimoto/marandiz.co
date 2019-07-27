import React, { useMemo, useRef, useState } from 'react';
import classes from 'classnames';

import styles from './ThreadBlocks.module.scss';

const { rows } = JSON.parse(document.querySelector('#googleSheets').innerHTML);

const unfilteredThreads = rows
	.map(({ timestamp, image, ...thread }) => ({
		...thread,
		image:     image.replace(/^https:\/\/drive\.google\.com\/open\?id=(.*)$/u, 'https://drive.google.com/uc?id=$1'),
		timestamp: new Date(timestamp),
	}))
	.sort((a, b) => b.timestamp - a.timestamp);

function ThreadBlocks() {
	const [filter, setFilter] = useState(null);
	const containerRef = useRef();

	const toggleFilter = (newFilter) => {
		window.scrollTo(0, containerRef.current.offsetTop);
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

	return (
		<>
			<div className={styles.container} ref={containerRef}>
				<div className={styles.heading}>
					<div className={styles.fadeAway} />
					<h2 className={styles.header}>
						Content + Press
					</h2>
					<div className={styles.actions}>
						<div className={styles.filters}>
							<button
								type="button"
								className={classes(styles.filter, { [styles.selected]: filter === 'article' })}
								onClick={() => toggleFilter('article')}
							>
								Article
							</button>
							<button
								type="button"
								className={classes(styles.filter, { [styles.selected]: filter === 'twitter' })}
								onClick={() => toggleFilter('twitter')}
							>
								Twitter
							</button>
							<button
								type="button"
								className={classes(styles.filter, { [styles.selected]: filter === 'medium' })}
								onClick={() => toggleFilter('medium')}
							>
								Medium
							</button>
						</div>
					</div>
				</div>
				<div className={styles.threads}>
					{threads.map(({ id, image, contenttitle, article, twitter, medium }) => (
						<div key={id} className={classes(styles.thread, styles.featured)}>
							<div className={styles.image} style={{ backgroundImage: `url(${image})` }} />
							<div className={styles.content}>
								<div className={styles.topSpacer} />
								<h2 className={styles.title}>
									{contenttitle}
								</h2>
								<div className={styles.bottomSpacer} />
								<span className={styles.linksHeader}>Read On:</span>
								<div className={styles.links}>
									{article && <a className={styles.link} href={article} target="_blank" rel="noopener noreferrer">Article</a>}
									{twitter && <a className={styles.link} href={twitter} target="_blank" rel="noopener noreferrer">Twitter</a>}
									{twitter && <a className={styles.link} href={medium} target="_blank" rel="noopener noreferrer">Medium</a>}
									{medium && <a className={styles.link} href={medium} target="_blank" rel="noopener noreferrer">Medium</a>}
								</div>
							</div>
						</div>
					))}
					{threads.map(({ id, image, contenttitle, article, twitter, medium }) => (
						<div key={id} className={styles.thread}>
							<div className={styles.image} style={{ backgroundImage: `url(${image})` }} />
							<div className={styles.content}>
								<div className={styles.topSpacer} />
								<h2 className={styles.title}>
									{contenttitle}
								</h2>
								<div className={styles.bottomSpacer} />
								<span className={styles.linksHeader}>Read On:</span>
								<div className={styles.links}>
									{article && <a className={styles.link} href={article} target="_blank" rel="noopener noreferrer">Article</a>}
									{twitter && <a className={styles.link} href={twitter} target="_blank" rel="noopener noreferrer">Twitter</a>}
									{medium && <a className={styles.link} href={medium} target="_blank" rel="noopener noreferrer">Medium</a>}
								</div>
							</div>
						</div>
					))}
					{threads.map(({ id, image, contenttitle, article, twitter, medium }) => (
						<div key={id} className={styles.thread}>
							<div className={styles.image} style={{ backgroundImage: `url(${image})` }} />
							<div className={styles.content}>
								<div className={styles.topSpacer} />
								<h2 className={styles.title}>
									{contenttitle}
								</h2>
								<div className={styles.bottomSpacer} />
								<span className={styles.linksHeader}>Read On:</span>
								<div className={styles.links}>
									{article && <a className={styles.link} href={article} target="_blank" rel="noopener noreferrer">Article</a>}
									{twitter && <a className={styles.link} href={twitter} target="_blank" rel="noopener noreferrer">Twitter</a>}
									{medium && <a className={styles.link} href={medium} target="_blank" rel="noopener noreferrer">Medium</a>}
								</div>
							</div>
						</div>
					))}
					{threads.map(({ id, image, contenttitle, article, twitter, medium }) => (
						<div key={id} className={styles.thread}>
							<div className={styles.image} style={{ backgroundImage: `url(${image})` }} />
							<div className={styles.content}>
								<div className={styles.topSpacer} />
								<h2 className={styles.title}>
									{contenttitle}
								</h2>
								<div className={styles.bottomSpacer} />
								<span className={styles.linksHeader}>Read On:</span>
								<div className={styles.links}>
									{article && <a className={styles.link} href={article} target="_blank" rel="noopener noreferrer">Article</a>}
									{twitter && <a className={styles.link} href={twitter} target="_blank" rel="noopener noreferrer">Twitter</a>}
									{medium && <a className={styles.link} href={medium} target="_blank" rel="noopener noreferrer">Medium</a>}
								</div>
							</div>
						</div>
					))}
					{threads.map(({ id, image, contenttitle, article, twitter, medium }) => (
						<div key={id} className={styles.thread}>
							<div className={styles.image} style={{ backgroundImage: `url(${image})` }} />
							<div className={styles.content}>
								<div className={styles.topSpacer} />
								<h2 className={styles.title}>
									{contenttitle}
								</h2>
								<div className={styles.bottomSpacer} />
								<span className={styles.linksHeader}>Read On:</span>
								<div className={styles.links}>
									{article && <a className={styles.link} href={article} target="_blank" rel="noopener noreferrer">Article</a>}
									{twitter && <a className={styles.link} href={twitter} target="_blank" rel="noopener noreferrer">Twitter</a>}
									{medium && <a className={styles.link} href={medium} target="_blank" rel="noopener noreferrer">Medium</a>}
								</div>
							</div>
						</div>
					))}
					{threads.map(({ id, image, contenttitle, article, twitter, medium }) => (
						<div key={id} className={styles.thread}>
							<div className={styles.image} style={{ backgroundImage: `url(${image})` }} />
							<div className={styles.content}>
								<div className={styles.topSpacer} />
								<h2 className={styles.title}>
									{contenttitle}
								</h2>
								<div className={styles.bottomSpacer} />
								<span className={styles.linksHeader}>Read On:</span>
								<div className={styles.links}>
									{article && <a className={styles.link} href={article} target="_blank" rel="noopener noreferrer">Article</a>}
									{twitter && <a className={styles.link} href={twitter} target="_blank" rel="noopener noreferrer">Twitter</a>}
									{medium && <a className={styles.link} href={medium} target="_blank" rel="noopener noreferrer">Medium</a>}
								</div>
							</div>
						</div>
					))}
					{threads.map(({ id, image, contenttitle, article, twitter, medium }) => (
						<div key={id} className={styles.thread}>
							<div className={styles.image} style={{ backgroundImage: `url(${image})` }} />
							<div className={styles.content}>
								<div className={styles.topSpacer} />
								<h2 className={styles.title}>
									{contenttitle}
								</h2>
								<div className={styles.bottomSpacer} />
								<span className={styles.linksHeader}>Read On:</span>
								<div className={styles.links}>
									{article && <a className={styles.link} href={article} target="_blank" rel="noopener noreferrer">Article</a>}
									{twitter && <a className={styles.link} href={twitter} target="_blank" rel="noopener noreferrer">Twitter</a>}
									{medium && <a className={styles.link} href={medium} target="_blank" rel="noopener noreferrer">Medium</a>}
								</div>
							</div>
						</div>
					))}
					{threads.map(({ id, image, contenttitle, article, twitter, medium }) => (
						<div key={id} className={styles.thread}>
							<div className={styles.image} style={{ backgroundImage: `url(${image})` }} />
							<div className={styles.content}>
								<div className={styles.topSpacer} />
								<h2 className={styles.title}>
									{contenttitle}
								</h2>
								<div className={styles.bottomSpacer} />
								<span className={styles.linksHeader}>Read On:</span>
								<div className={styles.links}>
									{article && <a className={styles.link} href={article} target="_blank" rel="noopener noreferrer">Article</a>}
									{twitter && <a className={styles.link} href={twitter} target="_blank" rel="noopener noreferrer">Twitter</a>}
									{medium && <a className={styles.link} href={medium} target="_blank" rel="noopener noreferrer">Medium</a>}
								</div>
							</div>
						</div>
					))}
					{threads.map(({ id, image, contenttitle, article, twitter, medium }) => (
						<div key={id} className={styles.thread}>
							<div className={styles.image} style={{ backgroundImage: `url(${image})` }} />
							<div className={styles.content}>
								<div className={styles.topSpacer} />
								<h2 className={styles.title}>
									{contenttitle}
								</h2>
								<div className={styles.bottomSpacer} />
								<span className={styles.linksHeader}>Read On:</span>
								<div className={styles.links}>
									{article && <a className={styles.link} href={article} target="_blank" rel="noopener noreferrer">Article</a>}
									{twitter && <a className={styles.link} href={twitter} target="_blank" rel="noopener noreferrer">Twitter</a>}
									{medium && <a className={styles.link} href={medium} target="_blank" rel="noopener noreferrer">Medium</a>}
								</div>
							</div>
						</div>
					))}
					{threads.map(({ id, image, contenttitle, article, twitter, medium }) => (
						<div key={id} className={styles.thread}>
							<div className={styles.image} style={{ backgroundImage: `url(${image})` }} />
							<div className={styles.content}>
								<div className={styles.topSpacer} />
								<h2 className={styles.title}>
									{contenttitle}
								</h2>
								<div className={styles.bottomSpacer} />
								<span className={styles.linksHeader}>Read On:</span>
								<div className={styles.links}>
									{article && <a className={styles.link} href={article} target="_blank" rel="noopener noreferrer">Article</a>}
									{twitter && <a className={styles.link} href={twitter} target="_blank" rel="noopener noreferrer">Twitter</a>}
									{medium && <a className={styles.link} href={medium} target="_blank" rel="noopener noreferrer">Medium</a>}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default ThreadBlocks;
