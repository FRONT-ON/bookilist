import cover1 from '@frontend/assets/img/bookCovers/bookCover1.png';
import cover2 from '@frontend/assets/img/bookCovers/bookCover2.png';
import cover3 from '@frontend/assets/img/bookCovers/bookCover3.png';
import cover4 from '@frontend/assets/img/bookCovers/bookCover4.png';
import cover5 from '@frontend/assets/img/bookCovers/bookCover5.png';
import cover6 from '@frontend/assets/img/bookCovers/bookCover6.png';
import cover7 from '@frontend/assets/img/bookCovers/bookCover7.png';
import cover8 from '@frontend/assets/img/bookCovers/bookCover8.png';
import cover9 from '@frontend/assets/img/bookCovers/bookCover9.png';
import cover10 from '@frontend/assets/img/bookCovers/bookCover10.png';
import cover11 from '@frontend/assets/img/bookCovers/bookCover11.png';
import cover12 from '@frontend/assets/img/bookCovers/bookCover12.png';
import cover13 from '@frontend/assets/img/bookCovers/bookCover13.png';
import cover14 from '@frontend/assets/img/bookCovers/bookCover14.png';
import cover15 from '@frontend/assets/img/bookCovers/bookCover15.png';
import cover16 from '@frontend/assets/img/bookCovers/bookCover16.png';

export const covers: string[] = [
	cover1,
	cover2,
	cover3,
	cover4,
	cover5,
	cover6,
	cover7,
	cover8,
	cover9,
	cover10,
	cover11,
	cover12,
	cover13,
	cover14,
	cover15,
	cover16,
];

export const titles: string[] = [
	'1Q84',
	"Harry Potter and the philosopher's stone",
	'Good omens',
	'The Lord of the Rings',
	'The Gray House',
	'Life for Sale',
	'Crime and Punishment',
	'The Metamorphosis',

	'Tomorrow, and Tomorrow, and Tomorrow',
	'Happy Place',
	'Demon Copperhead',
	'Yellowface',
	'The Hill We Climb',
	'The Covenant of Wate',
	'The 48 Laws of Power',
	'Verity',
];

export const authors: string[] = [
	'H. Murakami',
	'J.K. Rowling',
	'N. Gaiman, T. Pratchet',
	'J. R. R. Tolkien',
	'M. Petrosyan',
	'Y. Mishima',
	'F. M. Dostoevsky',
	'F. Kafka',

	'G. Zevin',
	'E. Henry',
	'B. Kingsolver',
	'R. F. Kuang',
	'P. Attia, B. Gifford',
	'A. Verghese',
	'R. Greene',
	'C. Hoover',
];

export const fullAuthors: string[] = [
	'Haruki Murakami',
	'Joanne Kathleen Rowling',
	'Neil Gaiman, Terry Pratchett',
	'John Ronald Reuel Tolkien',
	'Mariam Petrosyan',
	'Yukio Mishima',
	'Fyodor Mikhailovich Dostoevsky',
	'Franz Kafka',

	'Gabrielle Zevin',
	'Emily Henry',
	'Barbara Kingsolver',
	'Rebecca F. Kuang',
	'Amanda Gorman',
	'Peter Attia, Bill Gifford',
	'Abraham Verghese',
	'Robert Greene',
	'Colleen Hoover',
];

export interface Book {
	title: string;
	author: string;
	cover: string;
	fullAuthor: string;
	status: string;
}

export const booksMock: Book[] = titles.map((title, index) => ({
	title,
	author: authors[index],
	cover: covers[index],
	fullAuthor: fullAuthors[index],
	status: index < 8 ? 'bestsellers' : 'new',
}));
