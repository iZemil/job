import React from 'react';

import QuestionCard from '../QuestionCard';

import styles from './styles.module.css';

interface IProps {
	path: string;
	children: {
		id: string;
	}[];
}

export default function QuestionList(props: IProps) {
	const { path = '', children = [] } = props;

	return (
		<div className={styles.list}>
			{children.map(({ id }, index) => (
				<QuestionCard key={`${id}-${index}`} index={index} docId={`${path}${id}`} />
			))}
		</div>
	);
}
