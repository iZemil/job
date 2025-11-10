import Layout from '@theme/Layout';
import React from 'react';
import styles from './index.module.css';

import clsx from 'clsx';
import { RandomQuestion } from '../components/RandomQuestion';

const description = `Random Question Card 🎲`;

export default function QuestionsPage() {
	return (
		<Layout title={`Questions`} description={description}>
			<header className={clsx('hero hero--primary', styles.indexBanner)}>
				<div className="container">
					<h1 className={styles.index__title}>{description}</h1>
				</div>
			</header>

			<main>
				<RandomQuestion />
			</main>
		</Layout>
	);
}
