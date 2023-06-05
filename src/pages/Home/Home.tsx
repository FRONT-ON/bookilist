import { Box as MuiBox, Typography as MuiTypography, styled } from '@mui/material';
import { memo } from 'react';
import { Container } from '@atoms/Container';

const Box = styled(MuiBox)(() => ({
	height: '100%',
	position: 'relative',
	top: '40%',
}));

const Typography = styled(MuiTypography)(({ theme }) => ({
	fontSize: 81,
	maxWidth: 650,
	fontFamily: 'Spectral, Arial, sans-serif',
	[theme.breakpoints.down('md')]: {
		fontSize: 65,
	},
	[theme.breakpoints.down('sm')]: {
		fontSize: 50,
	},
}));

export const Home = memo(() => {
	return (
		<Box>
			<Container>
				<Typography variant="h1">Your online library of favorite books</Typography>
			</Container>
		</Box>
	);
});

Home.displayName = 'Home';
