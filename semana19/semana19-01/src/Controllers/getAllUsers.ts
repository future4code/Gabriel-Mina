import { Request, Response } from "express";
import getUsersAll from "../Bussines/getUsersAll";

export default async function getAllUsers(req:Request,res:Response) {
    try {
        const token = req.headers.authorization as string;
        const users = await getUsersAll(token);
        
        res.status(200).send(users)
    } catch (error) {
        res.send({ message: error.message }).status(error.status);
    }
}