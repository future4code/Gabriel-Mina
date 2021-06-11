import { Request, Response } from 'express'
import { connection } from '../connection';
import { generationToken } from '../services/authenticator';
import { generationId } from '../services/GenerationId';

export default async function createuser(
    req:Request,
    res:Response
):Promise<any> {
    try {
        const{email,pass} = req.body;

        if(!email || email.indexOf("@")=== -1){
            throw new Error("Email inválido!");
        }

        if(!pass || pass.length < 6 ){
            throw new Error("Senha inválida.Deve ter mais de 6 caracteres")
        }

        const id = generationId();

        await connection.insert({
            id,
            email,
            pass
        }).into("usuarioteste")

        const token = generationToken({
            id
        })

        res.status(200).send({
            message: "Criado com sucesso",
            token
        })
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}