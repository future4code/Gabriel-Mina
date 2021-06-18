import { Request, Response } from "express";
import { User } from "../../Bussines/User/User";


export default async function loginUser(req:Request,res:Response) {
    try {
        const email = req.body.email as string;
        const password = req.body.password as string;
        // gambiarra
        const name = "logandoUsuario";
        
        const login = new User(name,email,password);
        const token = await login.loginUserBd();

        res.status(200).send({token:token})
    } catch (error) {
        res.status(error.statusCode).send({message:error.message})
    }
}