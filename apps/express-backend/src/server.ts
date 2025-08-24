import express from 'express';
import cors from 'cors';
import rootRouter from './routes/rootRouter';

const app = express();
app.use(express.json());

app.use(cors(
    {
        origin: ['https://ablogify.netlify.app', 'http://localhost:3002', ], 
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true,
    }
))
app.use('/api/v1', rootRouter);

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
