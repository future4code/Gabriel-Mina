import { Request, Response } from "express";
import { CustomError } from "../../Bussines/Error/CustomError";
import { Post } from "../../Bussines/Post/Post";
import { AuthenticationData } from "../../model/types";
import { getTokenData } from "../../services/authenticator";

export default async function createPost(req:Request,res:Response) {
    try {
        let type = "normal";
        
        const token: string = req.headers.authorization as string;
        if(!token){
            throw new CustomError(404,"Token não encontrado");
        }
        const tokenData: AuthenticationData = getTokenData(token);
        
        console.log(tokenData);

        const photo = req.body.photo as string;
        const description = req.body.description as string;
        const author_id:string = tokenData.id;
        
        if(req.body.type){
            type = req.body.type as string;
        }
        
         
        
        const post = new Post(photo,description,author_id,type);
        const sucess = await post.createPostBd();

        res.status(200).send({"message":sucess})
    } catch (error) {
        res.status(error.statusCode).send({message:error.message})
    }
}