import express, {Express} from 'express';
import {BooksRouter} from './controllers/index';

export function initRoutes(app: Express) {
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    app.use('/books', BooksRouter);
}
