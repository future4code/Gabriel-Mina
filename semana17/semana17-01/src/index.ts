import { Request, Response } from "express";
import app from "./app";
import { connection } from './connection'



app.get("/usuarios-nome/search", async (req: Request, res: Response) => {
    try {

        const nome = req.query.nome as string;

        const result = await connection.raw(`
            SELECT id, name, email, type
            FROM aula48_exercicio
            WHERE name LIKE "%${nome}%";
        `);

        const usuarioNome = result[0];

        if (!usuarioNome.length) {
            res.statusCode = 404
            throw new Error("No recipes found")
        }

        res.status(200).send(usuarioNome)
    } catch (error) {
        console.log(error);
        res.send(error.message || error.sqlMessage)
    }
})

app.get("/usuarios-tipo/search", async (req: Request, res: Response) => {
    try {

        const tipo = req.query.tipo as string;

        const result = await connection.raw(`
            SELECT id, name, email, type
            FROM aula48_exercicio
            WHERE type LIKE "%${tipo}%";
        `);

        const usuariotipo = result[0];

        if (!usuariotipo.length) {
            res.statusCode = 404
            throw new Error("No recipes found")
        }

        res.status(200).send(usuariotipo)
    } catch (error) {
        console.log(error);
        res.send(error.message || error.sqlMessage)
    }
})

app.get("/usuarios-ordenacao/search", async (req: Request, res: Response) => {
    try {

        const ordenacao = req.query.ordenacao as string || "asc"
        const ordenacaoTipo = req.query.ordenacaoTipo as string || "email"


        if(!ordenacao || !ordenacaoTipo){
            throw new Error("Faltando argumentos")
        }

        const result = await connection.raw(`
            SELECT id, name, email, type
            FROM aula48_exercicio
            ORDER BY ${ordenacaoTipo} ${ordenacao.toUpperCase()};
        `);

        const usuariotipo = result[0];

        if (!usuariotipo.length) {
            res.statusCode = 404
            throw new Error("No recipes found")
        }

        res.status(200).send(usuariotipo)
    } catch (error) {
        console.log(error);
        res.send(error.message || error.sqlMessage)
    }
})

app.get("/usuarios-pagina/search", async (req: Request, res: Response) => {
    try {

        const ordenacao = req.query.ordenacao as string || "asc"
        const ordenacaoTipo = req.query.ordenacaoTipo as string || "email"
        const page = Number(req.query.pagina) || 1

        if(!ordenacao || !ordenacaoTipo){
            throw new Error("Faltando argumentos")
        }
        
        const result = await connection.raw(`
            SELECT id, name, email, type
            FROM aula48_exercicio
            ORDER BY ${ordenacaoTipo} ${ordenacao.toUpperCase()}   
            LIMIT 5
            OFFSET ${5 * (page - 1)};
        `);

        const usuariotipo = result[0];

        if (!usuariotipo.length) {
            res.statusCode = 404
            throw new Error("No recipes found")
        }

        res.status(200).send({
            usuarios:usuariotipo,
            page
        })
    } catch (error) {
        console.log(error);
        res.send(error.message || error.sqlMessage)
    }
})

app.get("/usuario/search", async (req: Request, res: Response) => {
    try {
        let result;
        const nome = req.query.nome as string;
        const tipo = req.query.tipo as string;
        const ordenacao = req.query.ordenacao as string || "desc"
        const ordenacaoTipo = req.query.ordenacaoTipo as string || "name"
        const page = Number(req.query.pagina) || 1

        if(nome){
            result = await connection.raw(`
            SELECT id, name, email, type
            FROM aula48_exercicio
            WHERE name LIKE "%${nome}%"
            ;
            `)
        }else if (tipo){
            result = await connection.raw(`
            SELECT id, name, email, type
            FROM aula48_exercicio
            WHERE type LIKE "%${tipo}%";
            `)
        }else{
            result = await connection.raw(`
            SELECT id, name, email, type
            FROM aula48_exercicio
            ORDER BY ${ordenacaoTipo} ${ordenacao.toUpperCase()}   
            ;
            `)
        }
        
        //  result = await connection.raw(`
        //     SELECT id, name, email, type
        //     FROM aula48_exercicio
        //    ORDER BY ${ordenacaoTipo} ${ordenacao.toUpperCase()}   
        //     LIMIT 5
        //     OFFSET ${5 * (page - 1)};
        // `);

        const usuariotipo = result[0];

        if (!usuariotipo.length) {
            res.statusCode = 404
            throw new Error("No recipes found")
        }

        res.status(200).send({
            usuarios:usuariotipo,
            page
        })
    } catch (error) {
        console.log(error);
        res.send(error.message || error.sqlMessage)
    }
})

