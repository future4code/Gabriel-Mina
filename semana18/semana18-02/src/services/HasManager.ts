import * as bcrypt from 'bcryptjs'

export const createHash = async(s:string):Promise<string>=>{
    const salt:string = await bcrypt.genSalt(12);
    const result:string = await bcrypt.hash(s,salt);
    
    return result;
}

export const comparePass = async (s:string,hash:string):Promise<boolean>=>{
    return bcrypt.compare(s,hash);
}