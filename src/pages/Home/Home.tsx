import {Box as MuiBox, Typography as MuiTypography, styled} from '@mui/material';
import {memo} from 'react';
import {Container} from '@atoms/Container';
import {BookCarousel} from '@pages/Home/BookCarousel/BookCarousel';

const Box = styled(MuiBox)(() => ({
    height: '100%',
    position: 'relative',
    top: '7%',
}));

const Typography = styled(MuiTypography)(({theme}) => ({
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
            <Container className="defaultContainer">
                <Typography variant="h1">Your online library of favorite books</Typography>
            </Container>
            <Container
                className="carouselContainer">
                <BookCarousel filter='bestsellers' text='Bestsellers'/>
                <BookCarousel filter='new' text='New books'/>
            </Container>
        </Box>
    );
});

Home.displayName = 'Home';
