import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { GlobalStyles, SnackbarsProvider, ThemeProvider } from '@ui';

import { persistor, store } from './store';
import { theme } from './view/components/theme';
import { Routing } from './view/pages/Routing';

export function App() {
	return (
		<div>Interview</div>
	);
}
