import insertUser from "../Data/insertUser";
import { user } from "../model/types";
import { generateToken } from "../services/authenticator";
import { createHash } from "../services/hashManager";
import { generateId } from "../services/idGenerator";

// logica e validacao do endpoint
export default async function creatUser(user:user) {
    try {
        
        if(!user.name || !user.email || !user.password || !user.role){
            throw new Error("Please , fill all the fields")
        }

        if(user.email.indexOf("@") === -1){
            throw new Error("Invalid Email");
        }

        if(user.password.length < 6){
            throw new Error("Password must have at least 6 characters");
        }

        const id = generateId();
        const hashPass = await createHash(user.password);
        
        await insertUser({
            ...user,
            password:hashPass,
            id
        })

        const token = generateToken({
            id,
            role:user.role
        });

        return token

    } catch (error) {
        throw new Error( error.message || "Error creating user. Please check your system administrator.");
    }
}