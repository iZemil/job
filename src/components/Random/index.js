import React from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';
import data from '@site/static/questions.json';

const random = () => data[Math.floor(Math.random() * data.length)];

export const Random = () => {
	const [question, setQuestion] = React.useState(random());

	const handleClick = () => {
		setQuestion(random());
	};

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>question</h2>
			<h3 className={styles.question}>{question}</h3>

			<button className={clsx('button button--secondary button--lg', styles.nextButton)} onClick={handleClick}>
				🎲 Next
			</button>
		</div>
	);
};
