# o Cookenu , sistema de receitas culinárias.

# endpoints

## http://localhost:3003/user/signup
### Este endpoint serve para se cadastrar :
### {
### 	"name": "Alice",
### 	"email": "alice@lbn.com",
### 	"password": "123456"
### }


## http://localhost:3003/user/recipe
### este endpoint serve para criar uma receita:
### {
### 	"title": "título da receita",
### 	"description": "descrição da receita"
### }


## http://localhost:3003/user/login
### este endpoint serve para logar no sistema:
### {
### 	"email": "alice@lbn.com",
### 	"password": "123456"
### }


## http://localhost:3003/user/profile
### este endpoint serve para pegar o próprio perfil:
### saida:

### {
### 	"id": "id do usuário",
### 	"name": "Alice",
### 	"email": "alice@lbn.com"
### }


## http://localhost:3003/user/:id
### este endpoint serve para Pegar perfil de outro usuário:
### sainda:

### {
### 	"id": "id do usuário",
### 	"name": "Bob",
### 	"email": "bob@lbn.com"
### }


## http://localhost:3003/user/recipe/:id
### este endpoint serve para Pegar receita:
### saida:
### {
### 	"id": "id da receita",
### 	"title": "Ovo Frito",
### 	"description": "Pega o ovo, põe na frigideira e reza!"
### 	"cratedAt": "31/12/2020"
### }


