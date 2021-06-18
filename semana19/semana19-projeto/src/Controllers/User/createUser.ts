import { Request, Response } from "express";
import { User } from "../../Bussines/User/User";

export default async function createuser(req:Request,res:Response){
    try {
        const name = req.body.name as string;
        const email = req.body.email as string;
        const password = req.body.password as string;

        const user = new User(name,email,password)
        const token = await user.createUserBd()
        res.status(200).send({
            message:"Sucesseful!!",
            token:token
        });

    } catch (error) {
        res.status(error.statusCode).send({message:error.message})
    }
}