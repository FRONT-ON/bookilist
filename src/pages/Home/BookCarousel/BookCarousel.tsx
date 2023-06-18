import { memo } from 'react';
import { Box, styled, Typography as MuiTypography } from '@mui/material';
import { booksMock } from '../../../mock/booksMock';
import { Carousel } from '@organisms/Carousel';
import { Link } from '@atoms/Link';

interface Props {
	filter: string;
	text: string;
}

const CarouselBox = styled(Box)(({ theme }) => ({
	border: `7px solid ${theme.palette.secondary.main}`,
	margin: '50px 0',
	padding: '3.5%',
	borderRadius: '15px',
	boxShadow: theme.shadows[3],

	backgroundColor: theme.palette.secondary.dark,
}));

const CarouselText = styled(MuiTypography)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',

	padding: '0 6% 50px 0',

	'& .seeAll': {
		fontSize: '21px',
		[theme.breakpoints.down('md')]: {
			fontSize: '18px',
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: '15px',
		},
	},
}));

const TypographySection = styled(MuiTypography)(({ theme }) => ({
	fontSize: '40px',
	maxWidth: '500',
	fontFamily: theme.typography,
	letterSpacing: '0.63',
	color: theme.palette.primary.main,
	fontWeight: '500',
	[theme.breakpoints.down('md')]: {
		fontSize: '30px',
	},
	[theme.breakpoints.down('sm')]: {
		fontSize: '20px',
	},
}));

export const BookCarousel = memo(({ filter, text }: Props) => {
	const filteredBooks = booksMock.filter((book) => book.status === filter);

	return (
		<CarouselBox>
			<CarouselText>
				<TypographySection>{text}</TypographySection>
				<Link className="seeAll">See all</Link>
			</CarouselText>
			<Carousel books={filteredBooks} />
		</CarouselBox>
	);
});

BookCarousel.displayName = 'BookCarousel';
