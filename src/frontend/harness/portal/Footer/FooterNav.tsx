import { List, ListItem, Link, styled } from '@mui/material';

const LinkSpan = styled('span')(() => ({
	width: 150,
	whiteSpace: 'nowrap',
}));

export const FooterNav = () => {
	return (
		<>
			<List sx={{ display: 'flex' }}>
				<ListItem>
					<Link href="mailto:front-on-mail@yandex.ru" underline="none">
						<LinkSpan>Contact us</LinkSpan>
					</Link>
				</ListItem>
				<ListItem>
					<Link href="https://github.com/FRONT-ON/bookilist" underline="none" target="_blank">
						<LinkSpan>GitHub</LinkSpan>
					</Link>
				</ListItem>
			</List>
		</>
	);
};

