import { connection } from "./connection"

export default async function getAlluserBD():Promise<any[]> {
    try {
        const result = await connection("User_Arq");
        
        return result;
    } catch (error) {
        throw new Error(error.message || error.sqlMessage)
    }
}