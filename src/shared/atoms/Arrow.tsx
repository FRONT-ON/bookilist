import arrow from '@assets/img/arrow.svg';
import { styled } from '@mui/material';
import {CSSProperties} from "react";

interface Props {
	onClick: () => void;
	rotate: number;
	text: string;
	style?: CSSProperties;
}

const ArrowContainer = styled('div')<CSSProperties>(({ style }) => ({
	display: 'flex',
	...style,
}));
const ArrowImg = styled('img')<Props>(({ rotate }) => ({
	transform: `rotate(${rotate}deg)`,
	cursor: 'pointer',
}));

export const Arrow = ({ onClick, rotate, text, style }: Props) => {
	return (
		<ArrowContainer className="custom-next-arrow" style={style}>
			<ArrowImg rotate={`${rotate}`} src={arrow} alt={`${text}`} onClick={onClick} />
		</ArrowContainer>
	);
};
