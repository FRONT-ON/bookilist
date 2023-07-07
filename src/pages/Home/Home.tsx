import { Box as MuiBox, Typography as MuiTypography, styled, containerClasses } from '@mui/material';
import { memo } from 'react';
import { Container } from '@atoms/Container';
import { BookCarousel } from '@pages/Home/BookCarousel/BookCarousel';

const Box = styled(MuiBox)(() => ({
	height: '100%',
	position: 'relative',
	top: '5%',
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

const ContainerHome = styled(Container)(() => ({
	[`&.${containerClasses.root}`]: {
		padding: '0 5%',
	},
}));

const ContainerHomeCarousel = styled(Container)(() => ({
	[`&.${containerClasses.root}`]: {
		padding: '15% 1.9% 3% 1.9%',
	},
}));

export const Home = memo(() => {
	return (
		<Box>
			<ContainerHome className={containerClasses.root}>
				<Typography variant="h1">Your online library of favorite books</Typography>
			</ContainerHome>
			<ContainerHomeCarousel className={containerClasses.root}>
				<BookCarousel filter="bestsellers" text="Bestsellers" />
				<BookCarousel filter="new" text="New books" />
			</ContainerHomeCarousel>
		</Box>
	);
});

Home.displayName = 'Home';
