import { Request, Response } from "express";
import app from "./app";
import { connection } from './connection'
var dayjs = require('dayjs')

app.put("/user",async(req:Request,res:Response)=>{
    try {
        const{name,username,email} = req.body;

        if(!(name && username && email)){
            throw new Error("Algum campo esta faltando ou vazio!")
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
        
        if(!result.length){
            throw new Error("Usuario não encontrado")            
        }

        res.status(200).send(result)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
})

app.post("/user/edit/:id",async(req:Request,res:Response)=>{
    try {
        const id = req.params.id;
        const {name,username,email} = req.body;

        if(!(name && username && email)){
            throw new Error("Não é possivel enviar campo vazio ou faltando!")
        }
        
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
        const{titulo,descricao,data_tarefa,usuario_id} = req.body;

        if(!(titulo && descricao && data_tarefa && usuario_id)){
            throw new Error("Algum campo está vazio ou faltando !")
        }

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

const buscarTarefa = async (id: number): Promise<any> => {
    const result = await connection.raw(`
    select tarefa.id,tarefa.titulo,tarefa.descricao,
    tarefa.data_limite,tarefa.usuario_id,
    usuario.username from usuario JOIN tarefa
    ON  usuario.id = tarefa.usuario_id
    WHERE tarefa.id = ${id};
    `)
    return result[0][0]
  }

app.get("/task/:id",async(req:Request,res:Response)=>{
    try {
        const id = Number(req.params.id);
    
        const result = await buscarTarefa(id);
                        
        if(!result){
            throw new Error("Tarefa não encontrada")            
        }  

        const data = dayjs(result.data_limite).format('DD/MM/YYYY')
        result.data_limite = data;
        
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
})