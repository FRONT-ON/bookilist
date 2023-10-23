import { Box, styled } from '@mui/material';
import { Menu } from './Menu/Menu';
import { MobileMenu } from './MobileMenu/MobileMenu';

const MobileMenuWrapper = styled(Box)(({ theme }) => ({
	[theme.breakpoints.up('sm')]: {
		display: 'none',
	},
}));

const MenuWrapper = styled(Box)(({ theme }) => ({
	[theme.breakpoints.down('sm')]: {
		display: 'none',
	},
}));

const authenticationMenuOptions: string[] = ['Log in', 'Sign in'];

export const AuthenticationMenu = () => {
	return (
		<>
			<MenuWrapper>
				<Menu options={authenticationMenuOptions} />
			</MenuWrapper>
			<MobileMenuWrapper>
				<MobileMenu options={authenticationMenuOptions} />
			</MobileMenuWrapper>
		</>
	);
};
