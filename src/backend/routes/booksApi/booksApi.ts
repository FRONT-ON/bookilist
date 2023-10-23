import axios from 'axios';
import express, { RequestHandler } from 'express';
import { Bestseller, BestsellerListDTO, BookDetails, GoogleBookSearchResultDTO, ListNameDTO } from '@backend/models/bestsellers';
import { getSeveralRandomInt } from '../../utils/getSeveralRandomInt';

const randomListNamesCount = 3;
const booksPerRandomListCount = 4;

const router = express.Router()

const getBestsellerListNames = async () => {
        const {data: listNamesData} = await axios.get<ListNameDTO>(
            'https://api.nytimes.com/svc/books/v3/lists/names.json', 
            {params: {'api-key': process.env.NYT_API_KEY}}
        )

        const listNames = listNamesData.results.map((element) => element.list_name);
        const maxListNamesIndex = listNames.length - 1;
        const randomNameIndexes = getSeveralRandomInt(randomListNamesCount, maxListNamesIndex);
        const randomListNames = randomNameIndexes.map((randomIndex) => listNames[randomIndex]);
    
        return randomListNames;
}

const getBestsellerListData = async (randomListNames: string[]) => {
        const randomListsDataResponse = await axios.all(
                randomListNames.map((randomListName) => {
                    return axios.get<BestsellerListDTO>(
                        'https://api.nytimes.com/svc/books/v3/lists.json', 
                        {params: {'api-key': process.env.NYT_API_KEY, list: randomListName}}
                    )
                })
            )

            const responsesData = randomListsDataResponse.map((response) => response.data.results);

            const randomBooksFromLists = responsesData.reduce((accumulator: BookDetails[], currentValue: Bestseller[]) => {
            const maxListIndex = currentValue.length;
            const randomBookIndexes = getSeveralRandomInt(booksPerRandomListCount, maxListIndex);
        
            const randomBooksDetails = randomBookIndexes.map((randomBookIndex) => currentValue[randomBookIndex].book_details[0]);
        
                return [...accumulator, ...randomBooksDetails]
            }, [])
        
            return randomBooksFromLists;
}

const getGoogleBooksImages = async (bestsellerListData: BookDetails[]) => {
        const googleBooksDataResponse  = await axios.all(
            bestsellerListData.map((randomBooksFromList) => {
                return axios.get<GoogleBookSearchResultDTO>(
                    'https://www.googleapis.com/books/v1/volumes',
                    {params: {'key': process.env.GOOGLE_API_KEY, q: `${randomBooksFromList.title}+isbn:${randomBooksFromList.primary_isbn13}` }}
                )
            })
        )

    const googleBooksData = googleBooksDataResponse.map((response) => response.data.items[0].volumeInfo.imageLinks.thumbnail)

    return googleBooksData;
}

export const booksApi = router.get('/bestsellers', (async (_request, response) => {
    try {
        const bestsellersListNames = await getBestsellerListNames();
        const bestsellersListData = await getBestsellerListData(bestsellersListNames);
        const googleBooksImages = await getGoogleBooksImages(bestsellersListData);

        const fullBestsellersData = bestsellersListData.map((bestseller, index) => ({
            title: bestseller.title,
            author: bestseller.author,
            image: googleBooksImages[index]
        }))
        response.json(fullBestsellersData);
    } catch (error) {
        response.status(500).send('INTERNAL SERVER ERROR');
    }
}) as RequestHandler)