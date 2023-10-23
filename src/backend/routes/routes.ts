import express from 'express';
import { booksApi } from './booksApi/booksApi';

const router = express.Router()

router.use('/books', booksApi )

export {router}