import express from 'express'
import createAccount from '../Controller/createAccount';

export const accountRouter = express.Router();

accountRouter.post("/create",createAccount)