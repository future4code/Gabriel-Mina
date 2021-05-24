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
    data_nascimento_data: Date,
    saldo: number,
    extrato: extrato[]
}

let usuarios_banco: usuario_conta[] = [
    {
        cpf: "581.579.997-15",
        nome: "Jubenildo",
        data_nascimento_data: new Date("10/01/1960"),
        saldo: 200,
        extrato: []
    },

    {
        cpf: "450.087.058-06",
        nome: "Gabriel",
        data_nascimento_data: new Date("08/12/1997"),
        saldo: 100,
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

        const result = usuarios_banco.find((usuario) => {
            if (usuario.nome === nome && usuario.cpf === cpf) {
                return true
            }
        })

        if (result) {
            res.status(200).send({ saldo: result.saldo })
        } else {
            throw new Error("Não foi possivel achar")
        }

    } catch (erro) {
        res.status(400).send({ message: erro.message })
    }
})

app.put("/usuario-saldo", (req: Request, res: Response) => {

    try {

        const nome = req.query.nome;
        const cpf = req.query.cpf;
        const saldo = Number(req.query.saldo);

        const result = usuarios_banco.find((usuario) => {
            if (usuario.nome === nome && usuario.cpf === cpf) {
                return true
            }
            /*
                if(usuario.nome !== nome){
                    throw new Error(" Nome nao encontado")
                }else if(usuario.cpf !== cpf){
                    throw new Error(" Cpf nao encontrado")
                }
            */
        })

        // adiciona saldo 
        if (result) {
            result.saldo += saldo;
            res.status(200).send(result)
        } else {
            throw new Error("Não foi possivel achar")
        }


    } catch (erro) {
        res.status(400).send({ message: erro.message })
    }
})

app.put("/pagamentos/:cpf", (req: Request, res: Response) => {
    try {

        const { valor, data_extrato, descricao } = req.body;
        const cpf = req.params.cpf;
        const result = usuarios_banco.find((usuarioCpf) => usuarioCpf.cpf === cpf)



        if (result) {
            if (valor > result.saldo) {
                throw new Error("Saldo insuficiente")
            } else {
                result.saldo -= valor;

                result.extrato.push({
                    valor,
                    data_extrato,
                    descricao
                })
            }
            res.status(200).send(`Conta no valor de ${valor} paga com sucesso`)
        } else {
            throw new Error("Não foi possivel achar")
        }

    } catch (erro) {
        res.status(400).send({ message: erro.message })
    }
})
// Transferencia de valores
app.post("/users/tranferencia", (req: Request, res: Response) => {
    try {

        const nomeRementente = req.query.nome
        const cpfRementente = req.query.cpf
        const valorRementente = Number(req.query.valor);
        const nomeDestinatario = req.query.nomeD;
        const cpfDestinatario = req.query.cpfD;

        // Procurar o remetente 
        const result = usuarios_banco.find((usuario) => {
            if (usuario.nome === nomeRementente && usuario.cpf === cpfRementente) {
                return true
            }
        })
        // Procurar o destinatario 
        const resultDestinatario = usuarios_banco.find((usuario) => {
            if (usuario.nome === nomeDestinatario && usuario.cpf === cpfDestinatario) {
                return true
            }
        })



        if (resultDestinatario) {
            if (result) {
                if (valorRementente > result.saldo) {
                    throw new Error(`Saldo insuficiente de ${result.nome} para realizar esta operação`)
                }

                // adicionar transferencia
                resultDestinatario.saldo += valorRementente
                result.saldo -= valorRementente;
            } else {
                throw new Error("remetente não encontrado não encontrado")
            }
        } else {
            throw new Error("Destinatário não encontrado")
        }
        res.status(200).send(`valor ${valorRementente} transferido com sucesso para ${nomeDestinatario}`)
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

app.post("/criar-conta", (req: Request, res: Response) => {

    try {
        const { cpf, nome, data_nascimento } = req.body;
        //converte idade dd/mm/aaaa para [dd,mm,aaaa]
        const [dia, mes, ano] = data_nascimento.split("/");

        const data_nascimento_data: Date = new Date(`${ano}-${mes}-${dia}`);

        const idadeEmMilisegundos: number = Date.now() - data_nascimento_data.getTime();

        const idadeAno: number = idadeEmMilisegundos / 1000 / 60 / 60 / 24 / 365;



        if (idadeAno <= 18) {
            throw new Error("Usuario deve ter idade igual ou maior do que 18 anos.")
        }

        usuarios_banco.filter((cpfDuplicado) => {
            if (cpfDuplicado.cpf.includes(cpf)) {
                throw new Error("CPF duplicado")
            }
        })

        usuarios_banco.push({
            cpf,
            nome,
            data_nascimento_data,
            saldo: 0,
            extrato: []
        })

        res.status(201).send(`Usuario ${nome} criado com sucesso`)
    } catch (erro) {
        res.status(400).send({ message: erro.message })
    }
})



app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");

})

