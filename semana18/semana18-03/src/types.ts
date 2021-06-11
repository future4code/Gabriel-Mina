export type authenticationData = {
   id: string,
   roles: string
}

export type userCredentials = {
   email: string
   password: string
}

export type userPersonalInfo = {
   name: string
   nickname: string
}

export enum userRole {
   ADMIN = "ADMIN",
   NORMAL = "NORMAL"
}

export type user = {
   id: string,
   nome: string,
   nicknome: string,
   email: string,
   pass: string,
   roles: userRole,
   endereco_id: number
}
export type adress ={
   cep:string,
	logradouro:string,
	complemento:string,
	bairro:string,
	cidade:string,
	estado:string
}