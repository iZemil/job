import React from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';

interface IQuestion {
	file: string;
	path: string;
	topic: string;
	data: string[];
}

const questions: IQuestion[] = require('@site/static/questions.json');
const ANY_TOPIC = 'any';

function random<T>(arr: T[]): T {
	return arr[Math.floor(Math.random() * arr.length)];
}
const randomQuestion = (topic: string) => {
	let section = questions.find((it) => it.topic === topic);
	if (!section || topic === ANY_TOPIC) {
		section = random(questions);
	}

	const { data, ...rest } = section;

	return {
		value: random(data),
		...rest,
	};
};

export const Random = () => {
	const [topic, setTopic] = React.useState<string>(ANY_TOPIC);
	const [question, setQuestion] = React.useState(randomQuestion(topic));

	const handleClick = () => {
		setQuestion(randomQuestion(topic));
	};

	const handleSetTopic = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const { value } = e.target;

		setTopic(value);
	};

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>question</h2>

			<select className={styles.topic} value={topic} onChange={handleSetTopic}>
				{questions.map((it) => (
					<option key={it.topic}>{it.topic}</option>
				))}
				<option value={ANY_TOPIC}>Any</option>
			</select>

			{/* TODO: add link to answer */}
			<div className={styles.question}>{question.value}</div>

			<button className={clsx('button button--secondary button--lg', styles.nextButton)} onClick={handleClick}>
				🎲 Next
			</button>
		</div>
	);
};
