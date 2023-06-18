import { Logo } from '@harness/portal/Logo/Logo';
import { Box, styled, Toolbar as MuiToolbar } from '@mui/material';
import { FooterNav } from '@harness/portal/Footer/FooterNav';
import { theme } from '@styles/theme';

const FooterAppBar = styled('div')(() => ({
	boxShadow: 'none',
	backgroundColor: theme.palette.secondary.main,
	position: 'static',
	color: 'transparent',
}));

const FooterMenu = styled(Box)(() => ({
	display: 'flex',
	gap: 20,
}));

const ToolbarFooter = styled(MuiToolbar)(() => ({
	justifyContent: 'space-between',
	height: 80,
}));

export const Footer = () => {
	return (
		<FooterAppBar>
			<ToolbarFooter>
				<Logo />
				<FooterMenu>
					<FooterNav />
				</FooterMenu>
			</ToolbarFooter>
		</FooterAppBar>
	);
};
