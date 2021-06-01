import { Request, Response } from "express";
import app from "./app";
import { connection } from './connection'


app.get("/filmes", async (req: Request, res: Response) => {
    try {
        const result = await connection("filmes");
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

app.get("/elenco-filme",async(req:Request,res:Response)=>{
    try {
        const result = await connection("filmes_elenco")
                            .join("filmes","filmes_elenco.filme_id","=","filmes.id")
                            .join("Actor","filmes_elenco.actor_id","=","Actor.id")
                            .select("filmes.name as NomeFilme","Actor.name as NomeAtor")     
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

app.post("/filmes/:id", async (req: Request, res: Response) => {
    try {
        const {comentarios, valor_avaliacao } = req.body;
        const filme_id = req.params.id;

        const novaAvalicao = {
            comentarios,
            valor_avaliacao,
            filme_id
        }

        await connection.insert(novaAvalicao).into("avalicao");
        res.status(200).send("Avaliacao inserida com sucesso!")

    } catch (error) {
        if(error.sqlMessage.includes("update")){
            res.send("Valor de Id inválido")
        }
        res.status(400).send({ message: error.message })
    }
})