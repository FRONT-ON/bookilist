import { useEffect, useRef } from 'react';
import { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Book as BookType } from '../../mock/booksMock';
import { Book } from '@molecules/Book';
import arrowCarousel from '@assets/img/arrowCarousel.svg';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import { Navigation, Swiper as SwiperCore } from 'swiper';
import { styled, useMediaQuery } from '@mui/material';
import { theme } from '@styles/theme';

interface Props {
	books: BookType[];
}

const CarouselBox = styled('div')(() => ({
	display: 'flex',
	alignItems: 'center',
	justifyItems: 'center',
}));

const Arrow = styled('div')(({ direction }) => ({
	cursor: 'pointer',
	padding: direction === 'before' ? '0 3.5% 0 0' : '0 0 0 3.5%',
}));

const WrapperComponent = styled('div')(() => ({
	height: '400px',
}));

export const Carousel = memo(({ books }: Props) => {
	const navigationPrevRef = useRef<HTMLDivElement>(null);
	const navigationNextRef = useRef<HTMLDivElement>(null);
	const swiperRef = useRef<SwiperCore | null>(null);

	useEffect(() => {
		if (navigationPrevRef.current) {
			navigationPrevRef.current.onclick = () => {
				if (swiperRef.current) {
					swiperRef.current.slidePrev();
				}
			};
		}

		if (navigationNextRef.current) {
			navigationNextRef.current.onclick = () => {
				if (swiperRef.current) {
					swiperRef.current.slideNext();
				}
			};
		}
	}, []);

	const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
	const isMiddleScreen = useMediaQuery(theme.breakpoints.up('md'));
	const isSmallScreen = useMediaQuery(theme.breakpoints.up('sm'));

	const slidesPerView = isLargeScreen ? 4 : isMiddleScreen ? 3 : isSmallScreen ? 2 : 1;

	return (
		<CarouselBox>
			<Arrow direction={'before'} className="custom-prev-arrow" ref={navigationPrevRef}>
				<img src={arrowCarousel} alt="Book icon" />
			</Arrow>
			<Swiper
				style={{ height: '360px' }}
				direction="horizontal"
				modules={[Navigation]}
				className="mySwiper"
				slidesPerView={slidesPerView}
				spaceBetween="4.5%"
				centeredSlidesBounds={true}
				loop={true}
				onSwiper={(swiper) => (swiperRef.current = swiper)}
				wrapperComponent={WrapperComponent}>
				{books.map((book, index) => (
					<SwiperSlide key={index}>
						<Book book={book} />
					</SwiperSlide>
				))}
			</Swiper>
			<Arrow diraction={'after'} className="custom-next-arrow" ref={navigationNextRef}>
				<img src={arrowCarousel} alt="Book icon" style={{ transform: 'rotate(180deg)' }} />
			</Arrow>
		</CarouselBox>
	);
});

Carousel.displayName = 'Carousel';
