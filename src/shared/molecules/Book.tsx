import { Card, styled, Typography, Typography as MuiTypography } from '@mui/material';
import { memo } from 'react';
import { Book as BookType } from '../../mock/booksMock';
import { NavigationLink } from '@molecules/NavigationLink';

const BackBook = styled(Card)(({ theme }) => ({
	background: theme.palette.secondary.main,
	boxShadow: theme.shadows[3],
	height: 350,
	width: 245,
	display: 'flex',
	flexDirection: 'column',
	borderRadius: 6,
	justifyContent: 'center',
	alignItems: 'center',
}));

interface BookImgProps {
	cover: string;
}

const BookImg = styled('img')<BookImgProps>(({ cover }) => ({
	backgroundImage: `url(${cover})`,
	backgroundSize: 'cover',
	borderRadius: 10,
	height: 242,
	width: 169,
}));

const BookText = styled(MuiTypography)(({ theme }) => ({
	fontFamily: theme.typography.fontFamily,
	fontWeight: 300,
	lineHeight: 18,
	textAlign: 'center',
	letterSpacing: 0.63,
	maxWidth: 180,
	marginTop: 13,
	whiteSpace: 'nowrap',

	'& .title': {
		fontSize: 16,
		height: 44,
		overflow: 'hidden',
		textOverflow: 'ellipsis',
	},
	'& .author': {
		fontSize: 12,
		height: 26,
		overflow: 'hidden',
		textOverflow: 'ellipsis',
	},
}));

export const Book = memo(({ book }: { book: BookType }) => {
	return (
		<NavigationLink to="/bookID">
			<BackBook>
				<BookImg cover={book.cover} />
				<BookText className="bookText">
					<Typography className="title">{book.title}</Typography>
					<Typography className="author">{book.author} </Typography>
				</BookText>
			</BackBook>
		</NavigationLink>
	);
});

Book.displayName = 'Book';
