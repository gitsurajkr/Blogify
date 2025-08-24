import express from 'express';
import { signin, signUp } from '../controller/userController';

const app = express();
app.use(express.json());

const userRouter: express.Router = express.Router();

userRouter.post('/signup', signUp);
userRouter.post('/signin', signin);

export default userRouter