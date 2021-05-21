import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

type extrato = {
    valor: number,
    data_extrato: string,
    descricao: string
}


type usuario_conta = {
    cpf: string,
    nome: string,
    idade: number,
    saldo: number,
    extrato?: extrato[]
}

let usuarios_banco: usuario_conta[]= [
    {
        cpf: "450.087.058-06",
        nome: "Gabriel Mina da Silva",
        idade: 23,
        saldo: 0,
        extrato: []
    }
]

app.get("/usuarios-banco", (req: Request, res: Response) => {
    try {
        res.status(200).send(usuarios_banco)
    } catch (erro) {
        res.status(400).send({ message: erro.message })
    }
})

app.get("/usuario-saldo", (req: Request, res: Response) => {

    try {

        const nome = req.query.nome;
        const cpf = req.query.cpf;

        const result = usuarios_banco.filter((person) => {

            if (person.nome !== nome) {
                throw new Error("Nome não existente")
            } else
                if (person.cpf !== cpf) {
                    throw new Error("CPF não existente")
                }

            if (person.nome === nome && person.cpf === cpf) {
                return person
            }

        })

        const mapResult = result.map((info)=>{
            return `Saldo: ${info.saldo}`
           })

        res.status(200).send(mapResult)
    } catch (erro) {
        res.status(400).send({ message: erro.message })
    }
})

app.put("/usuario-saldo", (req: Request, res: Response) => {

    try {

        const nome = req.query.nome;
        const cpf = req.query.cpf;
        const saldo = Number(req.query.saldo);

        const result = usuarios_banco.filter((person) => {

            if (person.nome !== nome) {
                throw new Error("Nome não existente")
            } else
                if (person.cpf !== cpf) {
                    throw new Error("CPF não existente")
                }else{
                    return person
                }
        })
       
        // adiciona saldo 
        result.map((saldoS)=>{saldoS.saldo+=saldo})

        res.status(200).send(result)
    } catch (erro) {
        res.status(400).send({ message: erro.message })
    }
})

app.put("/pagamentos/:cpf",(req: Request, res: Response)=>{
    try{
        
        const {valor,data_extrato,descricao} = req.body;
        const cpf = req.params.cpf;
        const result = usuarios_banco.find((usuarioCpf)=> usuarioCpf.cpf === cpf )
        
        
        
        if(result){
            if(valor > result.saldo){
                throw new Error("Saldo insuficiente")
            }else{
                result.saldo-= valor;
            }
        }
        

        const conta: extrato={
            valor,
            data_extrato,
            descricao
        }
        
        result?.extrato?.push(conta)
        res.status(200).send(conta)
    }catch(erro){
        res.status(400).send({message:erro.message})
    }
})

app.post("/criar-conta", (req: Request, res: Response) => {

    try {
        const { cpf, nome, idade, saldo } = req.body;

        if (!(idade >= 18)) {
            throw new Error("Usuario deve ter idade igual ou maior do que 18 anos.")
        }

        usuarios_banco.filter((cpfDuplicado)=>{
            if(cpfDuplicado.cpf.includes(cpf)){
                throw new Error("CPF duplicado")
            }
        })

        const novoUsuario: usuario_conta = {
            cpf,
            nome,
            idade,
            saldo
        }
        
        usuarios_banco.push(novoUsuario)
        res.status(200).send(`Usuario ${nome} criado com sucesso`)
    } catch (erro) {
        res.status(400).send({ message: erro.message })
    }
})



app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");

})

