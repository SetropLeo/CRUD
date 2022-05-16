import express from 'express';
import 'reflect-metadata';
import AppDataSource from './db/dataSource';

AppDataSource.initialize()

const app = express();
app.listen(3000, () => console.log('Server running'));
