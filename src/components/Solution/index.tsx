import React from 'react';
// https://github.com/facebook/docusaurus/blob/main/packages/docusaurus-theme-classic/src/theme/MDXComponents/Details.tsx
import Details from '@theme/MDXComponents/Details';

interface IProps {
	children: React.ReactNode;
}

export default function Solution(props: IProps) {
	const { children } = props;

	return (
		<Details>
			{/* @ts-ignore */}
			{/* <summary mdxType="summary">Solution</summary> */}

			{children}
		</Details>
	);
}
