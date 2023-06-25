import { Card, styled, Typography, Typography as MuiTypography } from '@mui/material';
import { memo } from 'react';
import { Book as BookType } from '../../mock/booksMock';

const BackBook = styled(Card)(({ theme }) => ({
	background: theme.palette.secondary.main,
	boxShadow: theme.shadows[3],
	height: '350px',
	width: '245px',
	display: 'flex',
	flexDirection: 'column',
	borderRadius: '6px',
	cursor: 'pointer',
	justifyContent: 'center',
	alignItems: 'center',
}));

interface BookImgProps {
	cover: string;
}

const BookImg = styled('img')<BookImgProps>(({ cover }) => ({
	backgroundImage: `url(${cover})`,
	backgroundSize: 'cover',
	borderRadius: '10px',
	height: '242px',
	width: '169px',
}));

const BookText = styled(MuiTypography)(({ theme }) => ({
	fontFamily: theme.typography.fontFamily,
	fontWeight: 300,
	lineHeight: '18px',
	textAlign: 'center',
	letterSpacing: '0.63px',
	maxWidth: '180px',
	marginTop: '13px',
	whiteSpace: 'nowrap',

	'& .title': {
		fontSize: '16px',
		height: '44px',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
	},
	'& .author': {
		fontSize: '12px',
		height: '26px',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
	},
}));

export const Book = memo(({ book }: { book: BookType }) => {
	return (
		<BackBook>
			<BookImg cover={book.cover} />
			<BookText className="bookText">
				<Typography className="title">{book.title}</Typography>
				<Typography className="author">{book.author} </Typography>
			</BookText>
		</BackBook>
	);
});

Book.displayName = 'Book';
