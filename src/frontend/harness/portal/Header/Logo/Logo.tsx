import { Link as DefaultLink, useLocation } from 'react-router-dom';
import bookIcon from '@frontend/assets/img/book.svg';
import { Box, Typography as MuiTypography, styled } from '@mui/material';

const Link = styled(DefaultLink)(() => ({
	textDecoration: 'none',
}));

const Typography = styled(MuiTypography)(({ theme }) => ({
	fontSize: 30,
	color: theme.palette.common.black,
	[theme.breakpoints.down('md')]: {
		display: 'none',
	},
}));

const Image = styled('img')(({ theme }) => ({
	[theme.breakpoints.down('sm')]: {
		width: 41,
		height: 38,
	},
}));

const LogoWrapper = styled(Box)(() => ({
	fontSize: 30,
	display: 'flex',
	gap: 10,
}));

export const Logo = () => {
	const locaton = useLocation();

	const logoContent = (
		<LogoWrapper>
			<Image src={bookIcon} alt="Book icon" />
			<Typography>BookiList</Typography>
		</LogoWrapper>
	);

	return locaton.pathname === '/' ? logoContent : <Link to="/">{logoContent}</Link>;
};
