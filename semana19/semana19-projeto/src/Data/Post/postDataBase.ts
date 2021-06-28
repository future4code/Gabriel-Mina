import { post } from "../../model/types";
import { BaseDataBase } from "../BaseDataBase";

export class postDataBase extends BaseDataBase{
    private tableName:string;

    constructor(tableName:string){
        super();
        this.tableName = tableName;
    }

    createPost = async(post:post)=>{
        await BaseDataBase.connection(this.tableName).insert(post);
    }

    isId = async(id:String)=>{
       return await BaseDataBase.connection(this.tableName).where({id})
    }

}