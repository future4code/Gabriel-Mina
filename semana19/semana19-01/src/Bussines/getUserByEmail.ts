import { user } from "../model/types";
import loginUserBD from '../Data/loginUserBD'
import { compareHash } from "../services/hashManager";
import { generateToken } from "../services/authenticator";

export default async function loginUser(user:user){

    const userFormBd = await loginUserBD(user.email);

    const hashCompare = await compareHash(user.password,userFormBd.password);
    const acessToken = generateToken({id:userFormBd.id, role:userFormBd.role});

    if(!hashCompare){
        throw new Error("Invalid Password")
    }

    return acessToken;

}