import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import queryString from 'query-string';
import styles from './styles.module.css';

import { Question, ANY_TOPIC } from './question';
import { useHistory, useLocation } from '@docusaurus/router';

export const Random = () => {
	const history = useHistory();
	const location = useLocation();
	const parsedSearch: { topic?: string } = queryString.parse(location.search);
	const [topic, setTopic] = React.useState<string>(parsedSearch?.topic || ANY_TOPIC);
	const [question, setQuestion] = React.useState(Question.random(topic));

	const handleClickNext = () => {
		Question.updateCache(question);
		setQuestion(Question.random(topic));
	};

	const handleChangeTopic = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const { value } = e.target;

		setTopic(value);
		history.push({
			search: `topic=${value}`,
		});
	};

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>question</h2>

			<select className={styles.topic} value={topic} onChange={handleChangeTopic}>
				{Question.topics().map((topic) => (
					<option key={topic}>{topic}</option>
				))}
				<option value={ANY_TOPIC}>Any</option>
			</select>

			<div className={styles.question}>
				<Link to={Question.getLink(question)}>{question.value}</Link>
			</div>

			<button
				className={clsx('button button--secondary button--lg', styles.nextButton)}
				onClick={handleClickNext}
			>
				🎲 Next
			</button>
		</div>
	);
};
