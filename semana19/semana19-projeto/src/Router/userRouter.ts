import express from 'express'
import createuser from '../Controllers/User/createUser'
import loginUser from '../Controllers/User/loginUser';

export const userRouter = express.Router();

userRouter.post("/create",createuser)
userRouter.post("/login",loginUser)