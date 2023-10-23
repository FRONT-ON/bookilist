import { createTheme } from '@mui/material';

export const theme = createTheme({
	palette: {
		primary: {
			main: '#037171',
			dark: '#024f4f',
			contrastText: '#F3F2ED',
		},
		secondary: {
			main: '#F3F2ED',
			dark: '#DFD8CE',
		},
	},
	typography: {
		fontFamily: ['Poppins', 'Arial', 'sans-serif'].join(','),
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 960,
			lg: 1280,
			xl: 1720,
		},
	},
});
