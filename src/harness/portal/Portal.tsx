import { ReactNode, memo } from 'react';
import { Box, styled } from '@mui/material';
import backgroundImage from '@assets/img/background.png';
import { useLocation } from 'react-router-dom';
import { Header } from './Header/Header';

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

const PageWrapper = styled(Box, {
	shouldForwardProp: (prop) => prop !== 'location',
})<PageWrapperProps>(({ theme, location }) => ({
	height: '100vh',
	display: 'flex',
	flexDirection: 'column',
	backgroundColor: theme.palette.secondary.main,
	backgroundImage: getPageBackgroundImage(location),
	backgroundRepeat: 'no-repeat',
	backgroundSize: '100% 100%',
}));

const Workspace = styled(Box)(() => ({
	position: 'relative',
	top: 120,
}));

const FullPageWrapper = styled(Box)(({ theme }) => ({
	height: '312vh',
	backgroundColor: theme.palette.secondary.dark,
}));

export const Portal = memo(({ children }: Props) => {
	const location = useLocation();
	return (
		<FullPageWrapper>
			<PageWrapper location={location.pathname}>
				<Header />
				<Workspace>{children}</Workspace>
			</PageWrapper>
		</FullPageWrapper>
	);
});

Portal.displayName = 'Portal';
