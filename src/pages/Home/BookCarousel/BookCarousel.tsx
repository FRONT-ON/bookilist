import { memo } from 'react';
import { Box, styled, Typography as MuiTypography } from '@mui/material';
import { booksMock } from '../../../mock/booksMock';
import { Carousel } from '@organisms/Carousel';
import { NavigationLink } from '@molecules/NavigationLink';

interface Props {
	filter: string;
	text: string;
}

const CarouselBox = styled(Box)(({ theme }) => ({
	border: `7px solid ${theme.palette.secondary.main}`,
	margin: '50px 0',
	padding: '3.5%',
	borderRadius: 15,
	boxShadow: theme.shadows[3],
	backgroundColor: theme.palette.secondary.dark,
}));

const CarouselText = styled(MuiTypography)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: '0 6% 50px 0',
	fontFamily: theme.typography,
	maxWidth: 500,
	color: theme.palette.primary.main,
	fontWeight: 500,
	'& .seeAll': {
		fontSize: 21,
		[theme.breakpoints.down('md')]: {
			fontSize: 18,
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: 15,
		},
	},

	'& .header': {
		fontSize: 40,
		[theme.breakpoints.down('md')]: {
			fontSize: 30,
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: 20,
		},
	},
}));

export const BookCarousel = memo(({ filter, text }: Props) => {
	const filteredBooks = booksMock.filter((book) => book.status === filter);

	return (
		<CarouselBox>
			<CarouselText>
				<span className="header">{text}</span>
				<NavigationLink to="/books" className="seeAll">
					See all
				</NavigationLink>
			</CarouselText>
			<Carousel books={filteredBooks} />
		</CarouselBox>
	);
});

BookCarousel.displayName = 'BookCarousel';
