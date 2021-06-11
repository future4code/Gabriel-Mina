import axios from "axios";
import { Request, Response } from "express";
import connection from "../connection";
import { adress } from "../types";


export default async function createAdress(req: Request,res: Response):Promise<any>{
    try {
        const cep = req.body.cep;
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        if(response.data.complemento === ''){
            response.data.complemento = "SEM COMPLEMENTO"
        }
        if(response.data.cep === undefined){
            throw new Error("Cep inválido")
        }
        const result:adress ={
            cep:response.data.cep,
            logradouro:response.data.logradouro,
            complemento:response.data.complemento,
            bairro:response.data.bairro,
            cidade:response.data.localidade,
            estado:response.data.uf
        };
        
        await connection("enderecosistema").insert(result)
        res.status(200).send("Endereco inserido com sucesso")
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}