import { Request, Response } from "express"
import connection from "../connection"
import { generateToken, getTokenData } from "../services/authenticator"
import { compare } from "../services/hashManager"

// id fo francis 15495c8f-7442-43d6-86df-c0078cb187d4

export default async function anotherUserProfile(
    req: Request,
    res: Response
): Promise<void> {
    try {

        const tokenData = req.headers.authorization as string;
        const id = req.params.id as string;

        const resultToken = getTokenData(tokenData)

        if(!resultToken){
            throw new Error("O usuário deste token não está cadastrado")
        }

        if (!tokenData) {
            res.statusCode = 401;
            throw new Error()
        }

        const [user] = await connection("usuarioCokenu")
            .where({id});

        if(!user){
            throw new Error("Usuário não encontrado")
        }

        res.status(200).send({
            id: user.id,
            name: user.nome,
            email:user.email
        })

    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}