import { connection } from '../connection'
import { Request, Response } from 'express'
import { generationToken } from '../services/authenticator';

export async function userLogin(req: Request, res: Response): Promise<any> {
    try {

        const { email, pass } = req.body;

        if (!email || email.indexOf("@") === -1) {
            throw new Error("Email inválido!");
        }

        const requestBd = await connection("usuarioteste").where({ email })
        const user = requestBd[0];
        
        if (!user) {
            res.statusCode = 401;
            throw new Error("Usuario não encontrado")
        }
        
        if (user.pass !== pass) {
            res.statusCode = 401;
            throw new Error("Senha inválida ")
        }
        

        const token = generationToken({
            id: user.id
        })

        res.status(200).send({ token })


    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}