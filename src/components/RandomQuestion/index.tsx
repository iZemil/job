import Link from '@docusaurus/Link';
import { useHistory, useLocation } from '@docusaurus/router';
import clsx from 'clsx';
import queryString from 'query-string';
import React, { useEffect } from 'react';

import { Question, Store, TOPIC_SELECT } from './question';

import useIsBrowser from '@docusaurus/useIsBrowser';
import styles from './styles.module.css';

export const RandomQuestion = () => {
	const isBrowser = useIsBrowser();
	const history = useHistory();
	const location = useLocation();
	const parsedSearch: { topic?: string } = queryString.parse(location.search);
	const [topic, setTopic] = React.useState<string>(parsedSearch?.topic || TOPIC_SELECT.ANY);
	const [question, setQuestion] = React.useState<Question>();
	const [isFavorite, setIsFavorite] = React.useState<boolean>(false);
	const [favoritesCount, setFavoritesCount] = React.useState<number>(Store.getFavorites().length);

	useEffect(() => {
		setQuestion(Question.random(topic));
	}, []);

	const handleClickNext = () => {
		setQuestion(Question.random(topic, true));
	};

	const handleChangeTopic = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const { value } = e.target;

		const selected = value.toLowerCase();

		setTopic(value);
		history.push({
			search: `topic=${value}`,
		});
	};

	useEffect(() => {
		if (topic === TOPIC_SELECT.FAVORITE && favoritesCount === 0) {
			setTopic(TOPIC_SELECT.ANY);
		}
	}, [favoritesCount]);

	useEffect(() => {
		if (topic !== TOPIC_SELECT.ANY) {
			setQuestion(Question.random(topic, false));
		}
	}, [topic]);

	const handleBookmark = (question: Question) => {
		Question.handleBookmark(question);
		// Update local reactive states so UI reflects the change immediately
		setIsFavorite(Question.isFavorite(question));
		setFavoritesCount(Store.getFavorites().length);
	};

	// Keep isFavorite in sync when the question itself changes
	useEffect(() => {
		setIsFavorite(Question.isFavorite(question));
	}, [question]);

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>
				Questions
				<select className={styles.topic} value={topic} onChange={handleChangeTopic}>
					<option value={TOPIC_SELECT.ANY}>All</option>
					{favoritesCount > 0 && <option value={TOPIC_SELECT.FAVORITE}>Favorites</option>}
					{Question.topics().map((topic) => (
						<option key={topic}>{topic}</option>
					))}
				</select>
			</h2>

			<div className={styles.question}>
				{question && (
					<h3>
						{question.title}
						<button
							className={clsx(
								'button button--sm',
								styles.bookmarkBtn,
								isFavorite ? styles.bookmarkBtnActive : ''
							)}
							onClick={() => handleBookmark(question)}
						>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M19 20H17.1717L12.7072 15.5354C12.3166 15.1449 11.6835 15.1449 11.2929 15.5354L6.82843 20L5 20V7C5 5.34315 6.34315 4 8 4H16C17.6569 4 19 5.34314 19 7V20ZM17 7C17 6.44772 16.5523 6 16 6H8C7.44772 6 7 6.44772 7 7V17L9.87873 14.1212C11.0503 12.9497 12.9498 12.9497 14.1214 14.1212L17 16.9999V7Z"
									fill="currentColor"
								/>
							</svg>
						</button>
					</h3>
				)}

				{question && (
					<Link className={styles.topicLink} to={Question.getTopicLink(question)}>
						#{Question.extractTopicType(question)}
					</Link>
				)}
			</div>

			<div className={styles.actionBar}>
				{question && (
					<button className={clsx('button button--outline button--lg')}>
						<Link className={styles.seeAnswerBtn} target="blank" to={Question.getLink(question)}>
							See answer
						</Link>
					</button>
				)}

				<button className={clsx('button button--secondary button--lg')} onClick={handleClickNext}>
					<span>🎲</span>Next
				</button>
			</div>
		</div>
	);
};
