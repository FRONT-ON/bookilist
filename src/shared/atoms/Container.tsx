import {Container as MuiContainer, styled, ContainerProps} from '@mui/material';

const AdoptedContainer = styled(MuiContainer)(() => ({
    '&.defaultContainer': {
        padding: '0 5%',
    },
    '&.carouselContainer': {
        padding: '20% 1.9% 3% 1.9%'
    },
}));

export const Container = ({children, className}: ContainerProps) => {
    return <AdoptedContainer className={className} maxWidth="xl">{children}</AdoptedContainer>;
};
