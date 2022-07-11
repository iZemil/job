import { useCallback, useEffect, useState } from 'react';

interface IChildProps {
	showAge: () => string;
}
const Child = ({ showAge }: IChildProps) => {
	useEffect(() => {
		const age = showAge();

		console.log(age);
	}, [showAge]);

	console.log('__render__', '[Child]');
	return <p>This is the child</p>;
};

export const Parent = () => {
	const [name, setName] = useState('');
	const [age, setAge] = useState('');

	// Using useCallback
	const showAge = useCallback(() => `I am ${age} years old`, [age]);

	console.log('__render__', '[Parent]');
	return (
		<div>
			<p>This is the parent</p>
			<label>
				name
				<input onChange={(e) => setName(e.target.value)} />
			</label>

			<label>
				Age
				<input type="number" onChange={(e) => setAge(e.target.value)} />
			</label>

			<Child showAge={showAge} />
		</div>
	);
};
