import express from 'express'
import createPost from '../Controllers/Post/createPost';

export const postRouter = express.Router();

postRouter.post("/create",createPost)
// postRouter.post("/:id",)