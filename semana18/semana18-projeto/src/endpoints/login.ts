import { Request, Response } from "express"
import connection from "../connection"
import { generateToken } from "../services/authenticator"
import { compare } from "../services/hashManager"

export default async function login(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { email, password } = req.body;

      if (!email || !password) {
         res.statusCode = 422
         throw new Error("'email' e 'senha' são obrigatórios ")
      }

      const [isEmailuser] = await connection('usuarioCokenu')
         .where({ email })

      if (!isEmailuser) {
         res.statusCode = 409
         throw new Error('Email não cadastrado')
      }

      const [user] = await connection("usuarioCokenu")
         .where({ email });

      const hashCompare = await compare(password, user.pass);

      if (!user || !hashCompare) {
         res.statusCode = 401;
         throw new Error("Senha diferente da cadastrada");
      }

      const token: string = generateToken({ id: user.id })

      res.send({ "Token de Acesso":token })

   } catch (error) {
      res.status(400).send({ message: error.message })
   }
}