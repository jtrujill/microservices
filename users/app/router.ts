import express, {Express} from 'express';
import {UsersRouter} from './controllers/index';

export function initRoutes(app: Express) {
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    app.use('/users', UsersRouter);
}
