import { Request, Response } from "express";
import { Account } from "../Bussines/Account/Account";

export default async function createAccount(req: Request, res: Response) {
    try {
        const cpf = req.body.cpf as string;
        const name = req.body.name as string;
        const age = Number(req.body.age);

         new Account(cpf,name,age);
        
        res.status(200).send({
            "message":"Conta criada com sucesso"
        })

    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
}