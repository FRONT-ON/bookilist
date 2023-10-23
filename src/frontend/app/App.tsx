import { Router } from '@frontend/harness/navigation/Router';
import { ThemeProvider } from '@mui/material';
import { theme } from '@frontend/styles/theme';

export const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Router />
		</ThemeProvider>
	);
};
