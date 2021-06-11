import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/authenticator";
import generateId from "../services/idGenerator";
import { user, userRole } from "../types";
import { hash } from "../services/hashManager";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { nome, nicknome, email, pass, roles,endereco_id } = req.body

      if (!nome || !nicknome || !email || !pass || !roles || !endereco_id) {
         res.statusCode = 422
         throw new Error("Preencha os campos corretamente")
      }

      if(roles.toUpperCase() !== userRole.ADMIN && roles.toUpperCase() !== userRole.NORMAL){
         res.statusCode = 422
         throw new Error("Os valores possíveis para 'roles' são NORMAL e ADMIN")
      }

      const [user] = await connection('usuariosistema')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const id: string = generateId();

      const cypherText = await hash(pass);

      const newUser: user = { id, nome, nicknome, email, pass: cypherText, roles,endereco_id }

      await connection('usuariosistema')
         .insert(newUser)

      const token: string = generateToken({ id, roles })

      res.status(201).send({ token })

   } catch (error) {
         res.status(400).send({ message: error.message })
   }
}