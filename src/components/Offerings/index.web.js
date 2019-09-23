import React from 'react';

import { email } from '../constants';

import styles from './Offerings.module.scss';

function Offerings() {
	return (
		<div className={styles.container}>
			<div className={styles.headerContainer}>
				<h2 className={styles.header}>
					With roots in tech and digital product, we elevate brands and experiences
					through active advising and coherent customer focused strategies.
				</h2>
			</div>
		{/*<div className={styles.offerings}>
				<div className={styles.offering}>
					<h3 className={styles.subHeading}>
						Unblock Your Company
					</h3>
					<h2 className={styles.heading}>
						Strategy Sessions
					</h2>
					<p className={styles.paragraph}>
						You’ve got problems, and we like problem solving. Whether starting on a new
						project or scaling existing offerings, this 4-hour meeting aims to generate
						valuable solutions and insights while taking into account team size and
						capabilities.
					</p>
					<p className={styles.paragraph}>
						Get confidence that your next steps are thoughtfully inspected and ready for
						action. We’ll follow up with a short summary and relevant action items.
					</p>
					<p className={styles.paragraph}>
						After signing up, we will reach out within one business day to schedule our
						conversation.
					</p>
					<div className={styles.spacer} />
					<a className={styles.cta} href={`mailto:${email}?subject=Strategy Session`} target="_blank" rel="noopener noreferrer">Get Started</a>
				</div>*/}
				<div className={styles.offering}>
					<h3 className={styles.subHeading}>
						DTC Strategy
					</h3>
					<h2 className={styles.heading}>
						Strategy & Audits
					</h2>
					<p className={styles.paragraph}>
						Coupling our experience with industry specific research, 
						we identify leverage points for your brand, 
						product (digital and physical), and marketing, 
						advising you on the best next steps. 
						We work with you on a per-project basis, providing data, 
						insights, and advice to drive towards your business objectives.
					</p>
					<p className={styles.paragraph}>
						In 30 days, our partners receive an audit along with actionable insights for future execution. We also meet in-person as needed.
					</p>
					<div className={styles.spacer} />
					<a className={styles.cta} href={`mailto:${email}?subject=Growth Partnership`} target="_blank" rel="noopener noreferrer">Get in Touch</a>
				</div>
			</div>
		</div>
	);
}

export default Offerings;
