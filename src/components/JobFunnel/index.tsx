import React from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';

export default function JobFunnel() {
	return (
		<div>
			<h3 style={{ textAlign: 'center' }}>Job Funnel Filters</h3>

			<div className={styles.steps}>
				<div className={styles.step}>Resume</div>
				<div className={styles.step}>First Touch</div>
				<div className={styles.step} style={{ borderStyle: 'dashed' }}>
					Technical Test
				</div>
				<div className={styles.step}>Interview(-s)</div>
				<div className={styles.step}>Job Offer</div>
			</div>
		</div>
	);
}
