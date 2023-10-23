import { Button as MuiButton, styled } from '@mui/material';
import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

const DefaultButton = styled(MuiButton)(() => ({
	textTransform: 'none',
}));

export const Button = ({ children }: Props) => {
	return <DefaultButton variant="contained">{children}</DefaultButton>;
};
