import React, { useMemo, useState } from 'react';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';

import clsx from 'clsx';

import Editor from '../Editor';
import BrowserWindow from '../BrowserWindow';

import styles from './styles.module.css';

interface ITest<TInput = any[], TOutput = any> {
	input: TInput;
	output: TOutput;
}

interface IProps {
	placeholder: string;
	tests: ITest[];
}

enum EStatus {
	SUCCESS = 'success',
	FAILURE = 'failure',
}

interface ITestCase {
	index: number;
	result: string;
	status: EStatus;
}

const renderIO = (test: ITest) => {
	let md = '';
	md += `Input: ${test.input.map((arg) => JSON.stringify(arg)).join(', ')}\n`;
	md += `Output: ${JSON.stringify(test.output)}`;

	return md;
};

const getFnName = (code: string): string => {
	const found = code.match(/function .+\(/gi);

	if (found && found[0]) {
		return found[0].replace(/(function)|[|\(\) ]/gi, '');
	}

	return 'main';
};

export default function Algo(props: IProps) {
	const { placeholder, tests } = props;
	const [value, changeValue] = useState(placeholder);
	const [testCases, setTestCases] = useState<ITestCase[]>([]);
	const [error, setError] = useState('');

	const handleTest = () => {
		const curTestCases: ITestCase[] = [];
		let err = '';

		let testIndex = 0;
		for (const test of tests) {
			const { input, output } = test;
			const args = `${input.map((arg) => JSON.stringify(arg)).join(', ')}`;
			const fn = getFnName(value);

			let executionCode = '';
			executionCode += `${value};`;
			executionCode += `return ${fn}(${args});`;

			let result;
			try {
				result = new Function(executionCode)();
			} catch (e) {
				err = String(e);
			}

			const isSuccess = JSON.stringify(result) === JSON.stringify(output);

			console.log(
				`${testIndex + 1}. ${
					isSuccess ? 'Successful' : 'Failed'
				} Test: (${args}) => ${result} expected ${output}`
			);

			curTestCases.push({
				index: testIndex,
				status: isSuccess ? EStatus.SUCCESS : EStatus.FAILURE,
				result,
			});

			testIndex += 1;
		}

		setTestCases(curTestCases);
		setError(err);
	};

	const successCount = useMemo(() => testCases.filter((it) => it.status === EStatus.SUCCESS).length, [testCases]);
	const isSuccessAll = useMemo(() => successCount === testCases.length, [successCount, testCases]);

	return (
		<BrowserWindow
			minHeight={400}
			// url={window.location.href} TODO: maybe with share button
		>
			<div className={styles.tools}>
				{testCases.length !== 0 ? (
					<div className={clsx(styles.status, 'alert', isSuccessAll ? 'alert--success' : 'alert--warning')}>
						Status: {isSuccessAll ? 'Success' : `Failure (${successCount}/${testCases.length})`}
					</div>
				) : (
					<div className={clsx(styles.status)}>Write your solution:</div>
				)}

				<button className={clsx('button button--primary', styles.run)} onClick={handleTest}>
					Run
				</button>
			</div>

			<Editor code={value} onChange={changeValue} />

			<div className={styles.testCases}>
				{error && (
					<Admonition type="danger" title="Error">
						{error}
					</Admonition>
				)}

				{tests.map((test, index) => {
					const testCase = testCases[index];
					const status = testCase?.status;
					const isSuccess = status === EStatus.SUCCESS;
					const isFailure = status === EStatus.FAILURE;

					return (
						<CodeBlock
							key={`${index}`}
							language="md"
							title={`Test Case ${index + 1} ${isSuccess ? '✅' : ''}${isFailure ? '🚫' : ''}`}
						>
							{renderIO(test)}
							{isFailure ? `\nResult: ${JSON.stringify(testCase.result)}` : ''}
						</CodeBlock>
					);
				})}
			</div>
		</BrowserWindow>
	);
}
