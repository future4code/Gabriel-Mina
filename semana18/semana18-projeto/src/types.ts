export type authenticationData = {
   id: string
}

export type user = {
   id: string,
   email: string,
   nome: string,
   pass: string
}

export type recipe = {
   titulo: string,
   modo_preparo: string,
   data_criacao: Date,
   usuario_id: string,
}