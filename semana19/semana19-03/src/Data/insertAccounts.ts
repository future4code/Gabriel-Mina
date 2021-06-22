import { createAccount } from "../Model/account"
import { connection } from "./connection"

export const insertAccount = async(
   account: createAccount
) => {
   await connection.insert(account).into('accountUser')
}