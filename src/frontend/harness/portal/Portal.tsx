import { ReactNode } from 'react';
import { Box, styled } from '@mui/material';
import backgroundImage from '@frontend/assets/img/background.png';
import { useLocation } from 'react-router-dom';
import { Header } from './Header/Header';
import { Footer } from '@frontend/harness/portal/Footer/Footer';
import { ArrowUp } from '@frontend/harness/portal/ArrowUp/ArrowUp';

interface Props {
	children: ReactNode;
}

interface PageWrapperProps {
	location: string;
}

const getPageBackgroundImage = (location: string) => {
	const defaultBackgroundStyle = 'none';
	if (location === '/') {
		return `url(${String(backgroundImage)})`;
	}
	return defaultBackgroundStyle;
};

const FullPageWrapper = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.secondary.dark,
	minHeight: '100vh',
}));

const ImageBackgroundWrapper = styled(Box)<PageWrapperProps>(({ location }) => ({
	position: 'absolute',
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	backgroundImage: getPageBackgroundImage(location),
	backgroundRepeat: 'no-repeat',
	backgroundSize: '100% 100%',
}));

const ContentWrapper = styled(Box)(() => ({
	position: 'relative',
}));

export const Portal = ({ children }: Props) => {
	const location = useLocation();

	return (
		<FullPageWrapper>
			<ImageBackgroundWrapper location={location.pathname} />
			<ContentWrapper>
				<Header />
				<Box>{children}</Box>
				<ArrowUp />
				<Footer />
			</ContentWrapper>
		</FullPageWrapper>
	);
};
