import { Request, Response } from 'express'
import {connection} from '../Connection'
import { generationToken } from '../services/Authenticator';
import {comparePass} from '../services/HasManager'

export async function userLogin(req: Request, res: Response): Promise<any> {
    try {

        const {email,password} =req.body;

        if(!email || email.indexOf("@")=== -1){
            throw new Error("Email inválido")
        }

        const reqBD = await connection("usuarioteste").where({email})
        const result = reqBD[0];

        const comparePassword = await comparePass(password,result.pass)

        if(!comparePassword){
            throw new Error("Senha inválida")
        }

        const token = generationToken({
            id:result.id,
            roles: result.roles
        })

        res.status(200).send({
            token
        })
    } catch (error) {
        res.status(400).send({message:error.message})
    }

}
