import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";
var dayjs = require('dayjs')



export default async function getRecipe(
    req: Request,
    res: Response
): Promise<any> {
    try {
        const tokenData = req.headers.authorization as string;
        const id = Number(req.params.id);

        const resultToken = getTokenData(tokenData)

        if (!resultToken) {
            throw new Error("O usuário deste token não está cadastrado")
        }

        if (!tokenData) {
            res.statusCode = 401;
            throw new Error()
        }

        const [user] = await connection("receitaCokenu")
            .where({ id });

        if (!user) {
            throw new Error("Receita não encontrada")
        }
        const date_create = dayjs(user.data_criacao).format('DD/MM/YYYY') 
        
        res.status(200).send({
            id: user.id,
            titulo: user.titulo,
            modo_preparo: user.modo_preparo,
            data_criacao: date_create
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}