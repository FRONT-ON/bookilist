import cover1 from '@assets/img/bookCovers/bookCover1.png'
import cover2 from '@assets/img/bookCovers/bookCover2.png'
import cover3 from '@assets/img/bookCovers/bookCover3.png'
import cover4 from '@assets/img/bookCovers/bookCover4.png'
import cover5 from '@assets/img/bookCovers/bookCover5.png'
import cover6 from '@assets/img/bookCovers/bookCover6.png'
import cover7 from '@assets/img/bookCovers/bookCover7.png'
import cover8 from '@assets/img/bookCovers/bookCover8.png'
import cover9 from '@assets/img/bookCovers/bookCover9.png'
import cover10 from '@assets/img/bookCovers/bookCover10.png'


export const covers: string[] = [
    cover1, cover2, cover3, cover4, cover5, cover6, cover7, cover8, cover9, cover10
];

export const titles: string[] = [
    '1Q84',
    "Harry Potter and the philosopher's stone",
    'Good omens',
    'The Lord of the Rings',
    'The Gray House',

    'Tomorrow, and Tomorrow, and Tomorrow',
    'Happy Place',
    'Demon Copperhead',
    'Yellowface',
    'The Hill We Climb',
];

export const authors: string[] = [
    'H. Murakami',
    'J.K. Rowling',
    'N. Gaiman, T. Pratchet',
    'J. R. R. Tolkien',
    'M. Petrosyan',

    'G. Zevin',
    'E. Henry',
    'B. Kingsolver',
    'R. F. Kuang',
    'P. Attia, B. Gifford',

];

export const fullAuthors: string[] = [
    'Haruki Murakami',
    'Joanne Kathleen Rowling',
    'Neil Gaiman, Terry Pratchett',
    'John Ronald Reuel Tolkien',
    'Mariam Petrosyan',

    'Gabrielle Zevin',
    'Emily Henry',
    'Barbara Kingsolver',
    'Rebecca F. Kuang',
    'Amanda Gorman',
    'Peter Attia, Bill Gifford',
];


export interface BookType {
    title: string;
    author: string;
    cover: string;
    fullAuthor: string;
    status: string;
}

export const booksMock: BookType[] = titles.map((title, index) => ({
    title,
    author: authors[index],
    cover: covers[index],
    fullAuthor: fullAuthors[index],
    status: index < 5 ? 'books' : 'new'
}));
