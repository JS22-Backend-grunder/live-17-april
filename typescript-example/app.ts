import express, { Express } from 'express';
const app: Express = express();
const PORT = 8000;

import insultsRouter from './routes/insults.js';

app.use(express.json());

app.use('/api/insults', insultsRouter);

app.listen(PORT, () => {
    console.log('Server started');
});