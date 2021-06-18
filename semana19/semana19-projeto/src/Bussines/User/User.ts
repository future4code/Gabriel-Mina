import { userDataBase } from "../../Data/User/UserDataBase";
import { UserType } from "../../model/types";
import { generateToken } from "../../services/authenticator";
import { compareHash, createHash } from "../../services/hashManager";
import { generateId } from "../../services/idGenerator"
import { CustomError } from "../Error/CustomError";

export class User{

    private id: string = generateId();
    private name: string;
    private email: string;
    private password: string;


    constructor(name:string,email: string, password: string) {
        this.provideInput(name, email, password);
        this.name = name;
        this.email = email;
        // com isso , só aparece quando for criar usuario
        if(name !== "logandoUsuario"){
            this.validPassCreate(password);
        }
        this.password = password;
    }


    private validPassCreate(pass: string) {
        if (pass.length < 6) {
            throw new CustomError(401,"Senha deve ter no mínimo 6 caracteres")
        }
    }
    
    private provideInput(name: string, email: string, password: string) {
        if (!name || !email || !password) {
            throw new CustomError(406,"'name' or 'email' or 'password' must be provided");
        }
    }

    public async loginUserBd():Promise<string>{
        const isEmail = new userDataBase("labook_users");
        const result = await isEmail.validEmail(this.email)
        
        
        if(!result[0]){
            throw new CustomError(401,"Usuario não encontrado")
        }
        
        const passCorrect:boolean = await compareHash(this.password,result[0].password) 
        
        if(!passCorrect){
            throw new CustomError(401,"Senha incorreta")
        }

        const token: string = generateToken({ id: this.id })
        return token;
    }


    public async createUserBd(): Promise<string> {
        const pass = await createHash(this.password);
        const result: UserType = {
            id: this.id,
            name: this.name,
            email: this.email,
            password: pass,
        }
        const token: string = generateToken({ id: this.id })

        const createuserBD = new userDataBase("labook_users");
        createuserBD.createUser(result);

        return token;
    }

}