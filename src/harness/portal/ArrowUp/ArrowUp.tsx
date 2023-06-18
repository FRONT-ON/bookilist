import { Button as MuiButton, styled } from '@mui/material';
import { useEffect, useState } from 'react';
import { Arrow } from '@atoms/Arrow';
import { useLocation } from 'react-router-dom';

const ArrowBox = styled(MuiButton)(({ theme }) => ({
	borderRadius: 15,
	position: 'fixed',
	height: 60,
	width: 80,
	zIndex: 1,
	pointerEvents: 'all',
	bottom: 90,
	left: '90%',
	'&:hover': {
		backgroundColor: theme.palette.secondary.main,
	},
	[theme.breakpoints.down('md')]: {
		height: 50,
		width: 70,
		left: '87.5%',
		bottom: 89,
	},
	[theme.breakpoints.down('sm')]: {
		height: 45,
		width: 65,
		left: '83%',
	},
	opacity: 0,
	transition: 'opacity 0.3s ease',
}));

export const ArrowUp = () => {
	const handleArrowTopClick = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const [isArrowVisible, setIsArrowVisible] = useState(false);

	const handleScroll = () => {
		const scrollAmount = window.innerHeight * 0.2;
		const scrollCurrent = window.scrollY;
		setIsArrowVisible(scrollCurrent > scrollAmount);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<ArrowBox
			variant="contained"
			color="secondary"
			style={{ opacity: isArrowVisible ? '1' : '0' }}
			onClick={handleArrowTopClick}>
			<Arrow rotate={90} text={'ArrowUp'} />
		</ArrowBox>
	);
};