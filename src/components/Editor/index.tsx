import React from 'react';
import SimpleEditor from 'react-simple-code-editor';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { useColorMode } from '@docusaurus/theme-common';

import lightCodeTheme from 'prism-react-renderer/themes/github';
import darkCodeTheme from 'prism-react-renderer/themes/vsDark';

import styles from './styles.module.css';

interface IProps {
	code: string;
	onChange: (code: string) => void;
}

export default function Editor(props: IProps) {
	const { code, onChange } = props;
	const { colorMode } = useColorMode();
	const theme = colorMode === 'dark' ? darkCodeTheme : lightCodeTheme;

	const handleChange = (newValue: string) => {
		onChange(newValue);
	};

	const highlight = (code) => (
		<Highlight {...defaultProps} theme={theme} code={code} language="typescript">
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<>
					{tokens.map((line, i) => (
						<div {...getLineProps({ line, key: i })}>
							{line.map((token, key) => (
								<span {...getTokenProps({ token, key })} />
							))}
						</div>
					))}
				</>
			)}
		</Highlight>
	);

	return (
		<SimpleEditor
			value={code}
			onValueChange={handleChange}
			highlight={highlight}
			padding={10}
			insertSpaces
			tabSize={4}
			className={styles.editor}
			style={theme.plain}
		/>
	);
}
