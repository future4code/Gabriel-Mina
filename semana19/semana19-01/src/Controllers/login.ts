import { Request, Response } from "express";
import getUserByEmail from '../Bussines/getUserByEmail'

export default async function login(req: Request, res: Response) {
    try {
        const { email, password } = req.body;
        const token = await getUserByEmail(req.body);
        res.status(200).send({ token })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}