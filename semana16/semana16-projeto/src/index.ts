import { Request, Response } from "express";
import app from "./app";
import { connection } from './connection'


app.put("/user",async(req:Request,res:Response)=>{
    try {
        const{name,username,email} = req.body;

        if(!(name && username && email)){
            throw new Error("Algum campo está vazio ou faltando !")
        }

        const novoUsuario ={
            name,
            username,
            email
        }
        await connection.insert(novoUsuario).into("usuario")
        res.status(200).send(`${name} criado com sucesso`)

    } catch (error) {
        res.status(400).send({message:error.message})
    }
})

app.get("/user/:id",async(req:Request,res:Response)=>{
    try {
        const id = req.params.id;
        const result = await connection("usuario").where({id})
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
})

app.post("/user/edit/:id",async(req:Request,res:Response)=>{
    try {
        const id = req.params.id;
        const{name,username,email} = req.body;
        const editarUsuario ={
            name,
            username,
            email
        }
        await connection("usuario").update(editarUsuario).where({id})
        res.status(200).send("Editado com sucesso!")
    } catch (error) {
        res.status(400).send({message:error.message})
    }
})

app.put("/task",async(req:Request,res:Response)=>{
    try {
        const{titulo,descricao,data_tarefa,usuario_id,} = req.body;
       
        const [dia, mes, ano] = data_tarefa.split("/");
        const data_limite: Date = new Date(`${ano}-${mes}-${dia}`);

        const novaTarefa ={
            titulo,
            descricao,
            data_limite,
            usuario_id,
        }
        await connection.insert(novaTarefa).into("tarefa")
        res.status(200).send(`Tarefa " ${titulo} " criada com sucesso`)

    } catch (error) {
        res.status(400).send({message:error.message})
    }
})

app.get("/task",async(req:Request,res:Response)=>{
    try {
        const result = await connection("tarefa")
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
})