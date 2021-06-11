import {Request,Response} from 'express'
import {connection} from '../Connection';
import { generationToken, getTokenData } from '../services/Authenticator';
import { createHash } from '../services/HasManager';
import {generationId} from '../services/IdGeneration'
import {USER_ROLES} from '../Types'


export async function userEdit(req:Request,res:Response):Promise<any> {
    try {
        const token = req.headers.authorization as string;
        const {email} =req.body;

        const authorizationData = getTokenData(token);
        
        if(authorizationData?.roles !== USER_ROLES.ADMIN){
            throw new Error("Somente admin pode acessar essa funcionalidade")
        }

        await connection("usuarioteste").update({email}).where({id:authorizationData.id});

        const reqBD = await connection("usuarioteste").where({id:authorizationData.id})
        const result = reqBD[0];
        
        res.status(200).send({
            id: result.id,
            email: result.email,
            role: authorizationData.roles
          });
        

    } catch (error) {
        res.status(400).send({
            message: error.message,
          });
    }
}