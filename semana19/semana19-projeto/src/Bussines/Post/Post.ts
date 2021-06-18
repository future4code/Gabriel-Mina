import { postDataBase } from "../../Data/Post/postDataBase";
import { post } from "../../model/types";
import { generateId } from "../../services/idGenerator"
import { CustomError } from "../Error/CustomError";

export class Post {
    private id: string = generateId();
    private photo: string;
    private description: string;
    private type: string;
    private author_id: string;

    constructor(photo: string, description: string, author_id: string, type: string) {
        this.provideInput(photo,description,author_id,type);
        this.photo = photo;
        this.description = description;
        this.type = type;
        this.author_id = author_id;
    }

    private provideInput(photo:string,description:string,author_id:string,type:string) {
        if (!photo || !description || !type || !author_id) {
            throw new CustomError(406, "Preencha todos os dados corretamente");
        }
    }

    public async createPostBd(): Promise<string> {
        const isID = new postDataBase("labook_posts");
        const veryfiID = await isID.isId(this.id)
        
        if(!veryfiID[0]){
            throw new CustomError(401,"Usuario nao encontrado")
        }

        const result: post = {
            id: this.id,
            photo: this.photo,
            description: this.description,
            type: this.type,
            author_id: this.author_id
        }
        
        const createpostBD = new postDataBase("labook_posts");
        createpostBD.createPost(result);

        return "Post criado com sucesso"
    }

}