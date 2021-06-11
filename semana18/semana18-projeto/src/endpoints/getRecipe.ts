import { Request,Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";


export default async function getRecipe(
    req: Request,
    res: Response
): Promise<any> {
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

        const [user] = await connection("receitaCokenu")
            .where({id});

        if(!user){
            throw new Error("Receita não encontrada")
        }

        const [dia, mes, ano] = user.data_criacao.split("-");
console.log(dia);

        const data_criacao = new Date(`${dia}/${mes}/${ano}`);
        console.log(data_criacao);
        
        // res.status(200).send({
        //     id:user.id,
        //     titulo:user.titulo,
        //     modo_preparo:user.modo_preparo,
        //     data_criacao:user.data_criacao
        // })
    } catch (error) {
        
    }
}