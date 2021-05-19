import express, { Request, Response } from 'express'
import cors from 'cors'
import { countries, country ,CONTINENTS} from './countries'

const app = express();

app.use(express.json())
app.use(cors())

// pegar todos os paises. Endpoint 1
app.get("/contries/all", (req: Request, res: Response) => {
    res.
        status(200)
        .send(countries)
})

//Procurar paises . Endpoint 3
app.get("/countries/search", (req: Request, res: Response) => {

    try {

        if (!req.query.name && !req.query.capital && !req.query.continent) {
            throw new Error("Nenhum parâmetro foi passado")
        }


        let result: country[] = countries;

        if (req.query.name) {
            result = result.filter(
                country => country.name.includes(req.query.name as string)
            )
        }

        if (req.query.capital) {
            result = result.filter(
                country => country.capital.includes(req.query.capital as string)
            )
        }

        if (req.query.continent) {
            result = result.filter(
                country => country.continent.includes(req.query.continent as string)
            )
        }

        if (!result) {
            throw new Error("nenhum resultado seja obtido")
        }

        res.status(200).send(result)

    } catch (erro) {
        res.status(400).send({ message: erro.message })
    }

})


// pegar paises pelo ai. Endpoint 2
app.get("/contries/:id", (req: Request, res: Response) => {

    try {

        if (isNaN(Number(req.params.id))) {
            throw new Error("Deve ser um numero")
        }

        const id = Number(req.params.id);
        const result = countries.find((country => country.id === id));

        if (!result) {
            throw new Error("Não há pais com esse ID")
        }

        res.
            status(200)
            .send(result)

    } catch (erro) {
        res.status(400).send({ message: erro.message })
    }
})


app.put("/countries/edit/:id", (req: Request, res: Response) => {

    try {

        if (isNaN(Number(req.params.id))) {
            throw new Error("O id deve ser um numero")
        }

        const id = Number(req.params.id);
        const alteraBody = req.body.alteraBody;

        let result:(country|undefined) = countries.find((country => country.id === id))


        const novoResult:(country) = {
            id:result?.id as number,
            name: req.body.name,
            capital: req.body.capital,
            continent: result?.continent as CONTINENTS 
        }

        console.log(novoResult);

        res.status(200).send(novoResult)

        

    } catch (erro) {
        res.status(400).send({ message: erro.message })
    }

})




app.listen(3003, () => {
    console.log("O Servidor esta rodando no endereço http://localhost:3003");
})