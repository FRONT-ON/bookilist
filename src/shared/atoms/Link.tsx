import { styled } from '@mui/material';
import { ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface Props {
	to: string;
	children: ReactNode;
	className?: string;
}

const DefaultLink = styled(RouterLink)(({ theme }) => ({
	color: theme.palette.primary.main,
	textDecoration: 'none',
	fontWeight: 500,
}));

export const Link = ({ to, children, className }: Props) => {
	return (
		<DefaultLink className={className} to={to}>
			{children}
		</DefaultLink>
	);
};
