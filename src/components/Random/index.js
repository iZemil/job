import React from 'react';
import clsx from 'clsx';

const data = [
	'#### What is TypeScript and why would I use it in place of JavaScript?',
	'#### void vs any',
	'#### Create fn with object argument and return string',
	'#### Optional Properties',
	'#### Interfaces vs Types',
	'#### Union types',
	'#### Values of object type',
	'#### Generics',
	'### Function overloading typescript',
];

const random = () => data[Math.floor(Math.random() * data.length)];

export const Random = () => {
	const [question, setQuestion] = React.useState(random());

	const handleClick = () => {
		setQuestion(random());
	};

	return (
		<div>
			<h3>{question}</h3>

			<button className="button button--primary button--lg" onClick={handleClick}>
				🎲 Random
			</button>
		</div>
	);
};
