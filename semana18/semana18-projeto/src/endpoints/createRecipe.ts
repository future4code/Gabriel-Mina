import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";
import { recipe } from "../types";


export default async function createRecipe(req: Request,res: Response):Promise<void>{
    try {
        
        const tokenData = req.headers.authorization as string;
        const{titulo,modo_preparo} = req.body;

        if(!titulo || !modo_preparo){
            throw new Error("Preencha corretamente os dados 'titulo' e 'modoPreparo'");
        }

        if (!tokenData) {
            res.statusCode = 401;
            throw new Error("Token não foi passado");
        }
        
        const resultToken = getTokenData(tokenData);

        if(!resultToken){
            throw new Error("Token inválido");
        }

        let dateRecipe = new Date(Date.now());
        
        const newRecipe:recipe={
            titulo,
            modo_preparo,
            data_criacao:dateRecipe,
            usuario_id:resultToken.id
        }

        await connection("receitaCokenu").insert(newRecipe);
        
        res.status(200).send({message:"Receita criada com sucesso"})
        
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}