import { Link } from '@frontend/atoms/Link';
import { styled } from '@mui/material';
import { ReactNode, memo } from 'react';
import { useLocation } from 'react-router-dom';

interface Props {
	to: string;
	children: ReactNode;
}

interface DefaultLinkProps {
	isCurrent: boolean;
}

const DefaultLink = styled(Link, { shouldForwardProp: (prop) => prop !== 'isCurrent' })<DefaultLinkProps>(
	({ theme, isCurrent }) => ({
		color: isCurrent ? theme.palette.primary.dark : theme.palette.primary.main,
		textDecoration: 'none',
		fontWeight: 500,
	}),
);

export const NavigationLink = memo(({ to, children }: Props) => {
	const location = useLocation();

	return (
		<DefaultLink to={location.pathname === to ? '#' : to} isCurrent={location.pathname === to}>
			{children}
		</DefaultLink>
	);
});

NavigationLink.displayName = 'NavigationLink';
