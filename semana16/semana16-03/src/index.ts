import { Request, Response } from "express";
import app from "./app";
import { connection } from './connection'



// uma função que receba um gender e devolva a média dos salários
// de atrizes ou atores desse gender
app.get("/users/:gender", async(req: Request, res: Response) => {
    try {
        const gender = req.params.gender;
        const result = await connection("Actor").avg("salary as MediaSalarial").where({gender})
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
   
})
const searchActor = async (name: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result[0][0]
  }

app.get("/users/:name",async(req:Request, res:Response)=>{
    try{
        const name = req.params.name
        
        console.log(await searchActor(name))
        res.end()
    }catch (error){
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})




app.get("/users", async(req: Request, res: Response) => {
    try {
        const result = await connection("Actor")
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
   
})

const getUserId = async(id:number):Promise<any>=>{
   return await connection("Actor").where("id",id)
}


app.get("/users/:id", async (req: Request, res: Response) => {
    try {
        console.log(req.params.id);
        
        // const result = await connection("Actor").where({ id: Number(req.params.id) });
        // res.send(result)
        console.log(await getUserId(Number(req.params.id)));
        res.end()
        
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

app.put("/users", async(req:Request,res:Response)=>{
    try {
        
        const updateUser ={
            id:Number(req.query.id),
            name: req.query.name,
            salary:req.query.salary,
            birth_date:req.query.birth_date,
            gender:req.query.gender,
            type:req.query.type
        }

        await connection("Actor").update(updateUser).where({id:Number(req.query.id)})
        res.status(200).send("Atualizado com sucesso")
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})


app.post("/users", async (req: Request, res: Response) => {
    try {

        const { name, salary, birth_date, gender } = req.body

        const newUser = {
            name,
            salary,
            birth_date,
            gender
        }
        await connection.insert(newUser).into("Actor");
        res.status(200).send(`Usuario ${name} criado com sucesso`)
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

app.delete("/users/:id",async(req:Request,res:Response)=>{
    try {
        await connection("Actor").delete().where({id: Number(req.params.id)})
        res.status(200).send(`id ${req.params.id} Deletado com sucesso`)
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})


