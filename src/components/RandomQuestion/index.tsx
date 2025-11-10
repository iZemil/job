import Link from '@docusaurus/Link';
import { useHistory, useLocation } from '@docusaurus/router';
import clsx from 'clsx';
import queryString from 'query-string';
import React, { useEffect } from 'react';

import { ANY_TOPIC, Question } from './question';

import useIsBrowser from '@docusaurus/useIsBrowser';
import styles from './styles.module.css';

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
				Question Topic
				<select className={styles.topic} value={topic} onChange={handleChangeTopic}>
					{Question.topics().map((topic) => (
						<option key={topic}>{topic}</option>
					))}
					<option value={ANY_TOPIC}>All</option>
				</select>
			</h2>

			{question && topic === ANY_TOPIC && (
				<Link className={styles.topicLink} to={Question.getTopicLink(question)}>
					#{Question.extractTopicType(question)}
				</Link>
			)}

			<div className={styles.question}>
				{question && <h3>{question.title}</h3>}

				{question && (
					<Link target="blank" to={Question.getLink(question)}>
						See answer
					</Link>
				)}
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
