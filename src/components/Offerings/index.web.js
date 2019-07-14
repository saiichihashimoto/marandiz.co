import React from 'react';

import styles from './Offerings.module.scss';

function Offerings() {
	return (
		<div className={styles.offerings}>
			<div className={styles.offering}>
				<h3 className={styles.subHeading}>Assessment</h3>
				<h2 className={styles.heading}>Brand Teardown</h2>
				<p className={styles.paragraph}>
					Deliverable is a document outlining strengths and weaknesses of the brand,
					where changes can be made, and actionable insights for the team to execute on.
				</p>
				<p className={styles.paragraph}>
					Document also includes proposal of areas where Petri Growth can help as a long
					term growth partner. Also includes a conference call to discuss
					findings/learnings/opportunities.
				</p>
				<div className={styles.spacer} />
				<a className={styles.button} href="http://google.com" target="_blank" rel="noopener noreferrer">Book Now | <b>$1500</b></a>
			</div>
			<div className={styles.offering}>
				<h3 className={styles.subHeading}>Advising</h3>
				<h2 className={styles.heading}>Strategy Sessions</h2>
				<p className={styles.paragraph}>
					4-hour call with me and a partner to problem solve operational and strategic
					issues for the company.
				</p>
				<p className={styles.paragraph}>
					Bring any issue and we'll work with you during this period to re-orient them
					on the right path.
				</p>
				<div className={styles.spacer} />
				<a className={styles.button} href="http://google.com" target="_blank" rel="noopener noreferrer">Book Now | <b>$1500</b></a>
			</div>
			<div className={styles.offering}>
				<h3 className={styles.subHeading}>Strategy & ops</h3>
				<h2 className={styles.heading}>Growth Partnerships</h2>
				<p className={styles.paragraph}>
					Retainer engagement (3mo min) where Petri Growth operates as a part time growth
					lead, helping to drive strategic and operational initiatives.
				</p>
				<p className={styles.paragraph}>
					Areas of high leverage for Petri: UX/UI/eCom/email iteration & experimentation,
					Messaging/Position/Content Strategy, Growth/Product/Launch strategy.
				</p>
				<div className={styles.spacer} />
				<a className={styles.button} href="http://google.com" target="_blank" rel="noopener noreferrer">Book Now | <b>$1500</b></a>
			</div>
		</div>
	);
}

export default Offerings;
