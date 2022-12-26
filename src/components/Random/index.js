import React from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';
import questions from '@site/static/questions.json';

const random = (arr) => arr[Math.floor(Math.random() * arr.length)];
const randomQuestion = () => {
	const { data, ...rest } = random(questions);

	return {
		value: random(data),
		...rest,
	};
};

export const Random = () => {
	const [question, setQuestion] = React.useState(randomQuestion());

	const handleClick = () => {
		setQuestion(randomQuestion());
	};

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>question</h2>
			<h2 className={styles.topic}>{question.topic}</h2>
			<div className={styles.question}>{question.value}</div>

			<button className={clsx('button button--secondary button--lg', styles.nextButton)} onClick={handleClick}>
				🎲 Next
			</button>
		</div>
	);
};
