import authRoutes from './routes/auth.routes.js';
import bodyParser from 'body-parser';
import connectDB from './config/mongo.js';
import cors from 'cors';

import express from 'express';
const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/', authRoutes);

connectDB();
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});