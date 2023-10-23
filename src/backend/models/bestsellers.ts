interface ListName {
    list_name: string;
}

export interface ListNameDTO {
    results: ListName[];
}

export interface BookDetails {
    title: string;
    author: string;
    primary_isbn13: string;
}

export interface Bestseller {
    book_details: BookDetails[]
}

export interface BestsellerListDTO {
    results: Bestseller[]
}

interface ImageLink {
    thumbnail: string;
}

interface VolumeInfo {
    imageLinks: ImageLink;
}

interface GoogleBook {
    volumeInfo: VolumeInfo
}

export interface GoogleBookSearchResultDTO {
    items: GoogleBook[]
}

type ResponseBestseller = Omit<BookDetails, 'primary_isbn13'> & {image: string}

export type ResponseBestsellersDTO = ResponseBestseller[]