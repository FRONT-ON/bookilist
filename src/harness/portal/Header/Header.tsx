import { Container } from '@atoms/Container';
import { memo } from 'react';
import { AppBar as MuiAppBar, Box, Toolbar as MuiToolbar, styled } from '@mui/material';
import { Logo } from './Logo/Logo';
import { Navigation } from './Navigation/Navigation';
import { AuthenticationMenu } from './AuthenticationMenu/AuthenticationMenu';

const AppBar = styled(MuiAppBar)(() => ({
	boxShadow: 'none',
}));

const Toolbar = styled(MuiToolbar)(() => ({
	display: 'flex',
	justifyContent: 'space-between',
}));

const Menu = styled(Box)(() => ({
	display: 'flex',
	gap: 20,
}));

export const Header = memo(() => {
	return (
		<AppBar position="fixed" color="transparent">
			<Container>
				<Toolbar disableGutters>
					<Logo />
					<Menu>
						<Navigation />
						<AuthenticationMenu />
					</Menu>
				</Toolbar>
			</Container>
		</AppBar>
	);
});

Header.displayName = 'Header';
