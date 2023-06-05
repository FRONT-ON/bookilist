import { IconButton, Menu as MuiMenu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { memo, useState, MouseEvent } from 'react';

interface Props {
	options: string[];
}

export const MobileMenu = memo(({ options }: Props) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleClick = (event: MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);

	const handleClose = () => setAnchorEl(null);

	return (
		<>
			<IconButton sx={{ padding: '10px', marginTop: '6px' }} onClick={handleClick} color="primary" size="large">
				<MenuIcon />
			</IconButton>
			<MuiMenu anchorEl={anchorEl} open={open} onClose={handleClose} onClick={handleClose}>
				{options.map((option) => (
					<MenuItem key={option}>{option}</MenuItem>
				))}
			</MuiMenu>
		</>
	);
});

MobileMenu.displayName = 'MobileMenu';
