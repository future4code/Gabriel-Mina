import { connection } from '../connection'
import { Request, Response } from 'express'
import { generationToken, getTokenData } from '../services/authenticator';

export async function editUser(req: Request, res: Response): Promise<any> {
    try {
        const tokenData = req.headers.authorization as string;

        const resultToken = getTokenData(tokenData)

        if(!tokenData){
            res.statusCode = 401;
            throw new Error()
        }
        
        const [user] = await connection("usuarioteste").where({id: resultToken!.id})


        res.status(200).send({
            id: user.id,
            email:user.email
        })

    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}