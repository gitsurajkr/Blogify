import express from 'express';
import { addBlogs, getBlogs } from '../controller/blogsController';
import { decodeUser } from '../middleware/decodeUser';

const app = express();
app.use(express.json());

const blogRouter: express.Router = express.Router();

blogRouter.post('/create-blog', addBlogs );
blogRouter.get('/get-blogs', getBlogs);

export default blogRouter