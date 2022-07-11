import styled from 'styled-components';

import { Parent } from './view/components/Cb';
import { GlobalStyles } from './view/components/GlobalStyles/GlobalStyles';

const Styled = {
	$: styled.div`
		padding: 20px;
	`,
};

export function App() {
	return (
		<Styled.$>
			<GlobalStyles />

			<h1>Interview</h1>
			<Parent />
		</Styled.$>
	);
}
