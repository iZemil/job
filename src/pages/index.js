import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';
import { Random } from '../components/Random';

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();

	return (
		<header className={clsx('hero hero--primary', styles.indexBanner)}>
			<div className="container">
				<h1 className={styles.index__title}>{siteConfig.title}</h1>

				<div className={styles.buttons}>
					<Link className="button button--secondary button--lg" to="/interview/getting-started">
						📙 Interview Guide
					</Link>

					<Link className="button button--secondary button--lg" to="/resume-example">
						👤 Resume Builder
					</Link>
				</div>
			</div>
		</header>
	);
}

export default function Home() {
	const { siteConfig } = useDocusaurusContext();

	return (
		<Layout title={`${siteConfig.title}`} description={`${siteConfig.description}`}>
			<HomepageHeader />

			<main>
				<Random />
			</main>
		</Layout>
	);
}
