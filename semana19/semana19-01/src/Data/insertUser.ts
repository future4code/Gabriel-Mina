import { user } from "../model/types";
import { connection } from "./connection";

export default async function insertUser(user:user):Promise<void> {
    try {
        await connection.insert(user).into("User_Arq");
    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }
}