import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';
import { RandomQuestion } from '../components/RandomQuestion';

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();

	return (
		<header className={clsx('hero hero--primary', styles.indexBanner)}>
			<div className="container">
				<h1 className={styles.index__title}>{siteConfig.title}</h1>
				<div className={styles.index__slogan}>🌈 Be a Better Javascript Developer</div>

				<div className={styles.buttons}>
					<Link className="button button--secondary button--lg" to="/interview">
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
		<Layout title={`Search`} description={`${siteConfig.tagline}`}>
			<HomepageHeader />

			<main>
				<RandomQuestion />
			</main>
		</Layout>
	);
}
