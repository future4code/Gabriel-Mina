import {Request,Response} from 'express'
import {connection} from '../Connection';
import { generationToken } from '../services/Authenticator';
import { createHash } from '../services/HasManager';
import {generationId} from '../services/IdGeneration'
import {USER_ROLES} from '../Types'
export async function userCreateLogin(req:Request,res:Response):Promise<any> {
    try {
        const {email,password,roles} = req.body;
        
        if(!email || !password || !roles){
            throw new Error("Esta faltando o 'email' ou 'password' ou'role'")
        }
        if(!(roles in USER_ROLES)){
            throw new Error("Role deve ser 'NORMAL' ou 'ADMIN'")
        }
        const id = generationId()

        const pass = await createHash(password);

        await connection("usuarioteste").insert({
            id,
            email,
            pass,
            roles
        })

        const token = generationToken({
            id,
            roles
        })

        res.status(200).send({
            token
        })
    } catch (error) {
        res.status(400).send({
            message: error.message,
          });
    }
}