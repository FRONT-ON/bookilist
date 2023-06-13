import { Logo } from '@harness/portal/Logo/Logo';
import { AppBar, Box, styled, Toolbar as MuiToolbar } from '@mui/material';
import { Container } from '@atoms/Container';
import { FooterNav } from '@harness/portal/Footer/FooterNav';
import { theme } from '@styles/theme';

const containerStyles = styled('div')(({ theme }) => ({
	backgroundColor: theme.palette.secondary.main,
	display: 'flex',
	minHeight: '100vh',
	paddingBottom: 80, // Высота футера
}));

const FooterAppBar = styled(AppBar)(() => ({
	top: 'auto', // Убираем свойство top для отмены фиксированной позиции вверху
	bottom: 0, // Устанавливаем позиционирование внизу
	boxShadow: 'none',
	backgroundColor: theme.palette.secondary.main,
	position: 'fixed',
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
			<Container sx={containerStyles}>
				<ToolbarFooter>
					<Logo />
					<FooterMenu>
						<FooterNav />
					</FooterMenu>
				</ToolbarFooter>
			</Container>
		</FooterAppBar>
	);
};