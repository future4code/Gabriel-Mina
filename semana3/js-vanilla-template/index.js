                                /* Exercicio1 */

a = 10;
b = 10;

console.log(b);
// Imprime (10)

b = 5;
console.log(a,b);
// imprime (10 5)

                                /* Exercicio 2 */
a = 10;
b = 20;
c = a;
b = c;
a = b;
                                
console.log(a, b, c)                  
// imprime (10 10 10)              

                                /* Exercicios de escrita */
// 1.A

let nome;

// 1.B

let idade;

// 1.C

console.log(typeof nome);
console.log(typeof idade);

// 1.D -  Não foi definido nenhum valor para a variável                    
nome = prompt("Quando seu nome?")
idade = prompt("Quando sua idade?")

console.log(typeof nome);
console.log(typeof idade);

// 1.E -  Os valores foram atribuidos as variaveis , sendo o nome uma stringo e a idade um number.

// 1.F
console.log("Olá", nome , "você tem :",idade, "anos");

                            // exericio 2

let nomePessoa = prompt("Quando seu nome?");
let idadePessoa = prompt("Quando sua idade?");
let cor = prompt("Quando sua cor favorita?");
let serie = prompt("Quando sua série favorita?");
let comida = prompt("Quando sua comida favorita?");

console.log("1.Quando seu nome? " , "Resposta: ", nomePessoa);
console.log("2.Quando sua idade? " , "Resposta: ", idadePessoa);
console.log("3.Quando sua cor favorita? " , "Resposta: ", cor);
console.log("4.Quando sua série favorita? " , "Resposta: ", serie);
console.log("5.Quando sua comida favorita? " , "Resposta: ", comida);
                            
                            // exericio 3

const comidas = ["lasanha","macarrao","carne","strogonoff","churrasco"];
console.log(comidas);
console.log("Essas são minhas comidas favoritas:");
console.log(comidas[0]);
console.log(comidas[1]);
console.log(comidas[2]);
console.log(comidas[3]);
console.log(comidas[4]);

let comidaUsuario = prompt("Qual sua comida favorita , usário:")

comidas[1] = comidaUsuario;

console.log("Essas são minhas comidas favoritas:");
console.log(comidas[0]);
console.log(comidas[1]);
console.log(comidas[2]);
console.log(comidas[3]);
console.log(comidas[4]);

                            // exericio 3

const perguntas = ["você esta com fome?","Você estao com blusa azul?","Você está gostado da labenu?"];

let sim = true;
let nao = false;

const respostas = [sim,nao,sim];

console.log(perguntas[0],":",respostas[0] );
console.log(perguntas[1],":",respostas[1] );
console.log(perguntas[2],":",respostas[2] );