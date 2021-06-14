import getAlluserBD from '../Data/getAllUserBD'
import { getTokenData } from '../services/authenticator'

export default async function getUsersAll(token: string) {


        const isValidToken = getTokenData(token);
        const alluser = await getAlluserBD()

        if(!isValidToken){
            throw new Error("Invalid token")
        }

        return alluser;
}