import { Container as MuiContainer, containerClasses, styled } from '@mui/material';
import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
	padding?: string;
}

const AdoptedContainer = styled(MuiContainer)(({ padding }: { padding?: string }) => ({
	[`&.${containerClasses.root}`]: {
		padding: padding ? `${padding}` : '0 5%',
	},
}));

export const Container = ({ children, padding }: Props) => {
	return <AdoptedContainer maxWidth="xl" padding={padding}>{children}</AdoptedContainer>;
};
