import React, { useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import queryString from 'query-string';
import { useHistory, useLocation } from '@docusaurus/router';

import { Question, ANY_TOPIC } from './question';

import styles from './styles.module.css';
import useIsBrowser from '@docusaurus/useIsBrowser';

export const RandomQuestion = () => {
	const isBrowser = useIsBrowser();
	const history = useHistory();
	const location = useLocation();
	const parsedSearch: { topic?: string } = queryString.parse(location.search);
	const [topic, setTopic] = React.useState<string>(parsedSearch?.topic || ANY_TOPIC);
	const [question, setQuestion] = React.useState<Question>();

	useEffect(() => {
		setQuestion(Question.random(topic));
	}, []);

	const handleClickNext = () => {
		setQuestion(Question.random(topic, true));
	};

	const handleChangeTopic = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const { value } = e.target;

		setTopic(value);
		history.push({
			search: `topic=${value}`,
		});
	};

	useEffect(() => {
		if (topic !== ANY_TOPIC) {
			setQuestion(Question.random(topic, false));
		}
	}, [topic]);

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>
				questions
				<select className={styles.topic} value={topic} onChange={handleChangeTopic}>
					{Question.topics().map((topic) => (
						<option key={topic}>{topic}</option>
					))}
					<option value={ANY_TOPIC}>All</option>
				</select>
			</h2>

			<div className={styles.question}>
				{question && <Link to={Question.getLink(question)}>{question.title}</Link>}
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
