import express from 'express';
import userRouter from './userRouter';
import blogRouter from './blogRoutes';

const app = express();
app.use(express.json());

const rootRouter: express.Router = express.Router();

rootRouter.use('/users', userRouter)
rootRouter.use('/blogs', blogRouter)

export default rootRouter