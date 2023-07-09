import { Container as MuiContainer, ContainerProps } from '@mui/material';

export const Container = (props: ContainerProps) => {
	return <MuiContainer maxWidth="xl" {...props}></MuiContainer>;
};
