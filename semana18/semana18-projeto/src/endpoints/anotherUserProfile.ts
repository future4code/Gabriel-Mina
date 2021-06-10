import { Request, Response } from "express"
import connection from "../connection"
import { generateToken, getTokenData } from "../services/authenticator"
import { compare } from "../services/hashManager"

export default async function anotherUserProfile(
    req: Request,
    res: Response
): Promise<void> {
    try {

        const tokenData = req.headers.authorization as string;
        const id = req.params.id as string;

        const resultToken = getTokenData(tokenData)

        if (!tokenData) {
            res.statusCode = 401;
            throw new Error()
        }


        const [user] = await connection("usuarioCokenu")
            .where({ id: resultToken?.id });

        res.status(200).send({
            id: user.id,
            name: user.nome,
            email:user.email
        })

    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}