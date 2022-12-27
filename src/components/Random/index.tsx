import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

import { Question, ANY_TOPIC } from './question';

export const Random = () => {
	const [topic, setTopic] = React.useState<string>(ANY_TOPIC);
	const [question, setQuestion] = React.useState(Question.random(topic));

	const handleNext = () => {
		Question.updateCache(question);
		setQuestion(Question.random(topic));
	};

	const handleSetTopic = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const { value } = e.target;

		setTopic(value);
	};

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>question</h2>

			<select className={styles.topic} value={topic} onChange={handleSetTopic}>
				{Question.topics().map((topic) => (
					<option key={topic}>{topic}</option>
				))}
				<option value={ANY_TOPIC}>Any</option>
			</select>

			<div className={styles.question}>
				<Link to={Question.getLink(question)}>{question.value}</Link>
			</div>

			<button className={clsx('button button--secondary button--lg', styles.nextButton)} onClick={handleNext}>
				🎲 Next
			</button>
		</div>
	);
};
