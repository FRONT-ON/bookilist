import { Router } from '@harness/navigation/Router';
import { ThemeProvider } from '@mui/material';
import { theme } from '@styles/theme';

export const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Router />
		</ThemeProvider>
	);
};
