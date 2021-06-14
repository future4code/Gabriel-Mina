import { Request,Response } from "express";
import createUser from "../Bussines/createUser";

export default async function signUp(
    req:Request,
    res:Response
) {
    try {
        const {email,name,password,role} = req.body;
        
        const token = await createUser(req.body)
        res.status(200).send({token})
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}