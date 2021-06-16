import { connection } from "./connection";

export default async function loginUser(email: string): Promise<any> {
    try {
        const result = await connection("User_Arq").where({email});
        
        if(!result){
            throw new Error("Usuario não encontrado")
        }
        
        return result[0]
    } catch (error) {
        throw new Error(error.message || error.sqlMessage)
    }
}