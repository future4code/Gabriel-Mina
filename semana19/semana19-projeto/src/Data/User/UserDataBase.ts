import { UserType } from "../../model/types";
import { BaseDataBase } from "../BaseDataBase";

export class userDataBase extends BaseDataBase{
    private tableName:string;

    constructor(tableName:string){
        super();
        this.tableName = tableName;
    }

    createUser = async(user:UserType)=>{
        await BaseDataBase.connection(this.tableName).insert(user);
    }

    validEmail = async(email:string)=>{
        const user = await BaseDataBase.connection(this.tableName).where({email})
        return user;
    }

}