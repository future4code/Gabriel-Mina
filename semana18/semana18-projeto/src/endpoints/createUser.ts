import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/authenticator";
import generateId from "../services/idGenerator";
import { user } from "../types";
import { hash } from "../services/hashManager";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, email, pass } = req.body

      if (!name || !email || !pass) {
         res.statusCode = 422
         throw new Error("Preencha corretamente os campos 'name','email' e 'pass'")
      }

      if (pass.length < 6) {
         throw new Error("Senha deve possuir no mínimo 6 caracteres")
      }

      if (email.indexOf("@") === -1) {
         throw new Error("Email inválido")
      }

      const [isEmailuser] = await connection('usuarioCokenu')
         .where({ email })

      if (isEmailuser) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const id: string = generateId();

      const newHashPass = await hash(pass);

      const newUser: user = {
         id,
         email,
         nome:name ,
         pass: newHashPass
      }

      await connection('usuarioCokenu')
         .insert(newUser)

      const token: string = generateToken({ id })

      res.status(201).send({
         "Token de acesso": token
      })

   } catch (error) {
      res.status(400).send({ message: error.message})
   }
}