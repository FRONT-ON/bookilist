import { Container as MuiContainer, containerClasses, styled } from '@mui/material';
import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

const AdoptedContainer = styled(MuiContainer)(() => ({
	[`&.${containerClasses.root}`]: {
		padding: '0 5%',
	},
}));

export const Container = ({ children }: Props) => {
	return <AdoptedContainer maxWidth="xl">{children}</AdoptedContainer>;
};
