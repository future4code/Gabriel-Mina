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
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
         throw new Error("TODAS AS INFORMACOES DEVEM SER PASSADAS");
      }

      if (password.length < 6) {
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

      const newHashPass = await hash(password);

      const newUser: user = {
         id ,
         email,
         nome:name ,
         pass: newHashPass
      }
      
      await connection('usuarioCokenu')
         .insert(newUser)

         const token: string = generateToken({ id })

      // CASO DE SUCESSO ! 
      res.status(201).send({
         "Token de acesso": token
      })

   } catch (error) {
      res.status(404).send({ message: error.message })
   }
}