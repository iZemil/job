import React from 'react';
import { useDocById } from '@docusaurus/theme-common/internal';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

// https://github.com/facebook/docusaurus/tree/main/packages/docusaurus-theme-classic/src/theme
// import DocCardList from '@theme/DocCardList';

import styles from './styles.module.css';

interface IProps {
	index?: number;
	docId: string;
	label?: string;
}

export default function QuestionCard(props: IProps) {
	const { docId, label, index } = props;
	const doc = useDocById(docId);

	return (
		<div className={clsx(styles.card, 'card')}>
			{index !== undefined && <div className={styles.index}>{index + 1}</div>}
			<Link className={styles.label} to={`/${docId}`}>
				{label ?? doc.title}
			</Link>
		</div>
	);
}
