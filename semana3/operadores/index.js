                        /* Exercicio 1 */
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
// console.log("a. ", resultado)       //False

resultado = bool1 && bool2 && bool3
// console.log("b. ", resultado)       //False

resultado = !resultado && (bool1 || bool1)
// console.log("c. ", resultado)       //True

// console.log("e. ", typeof resultado)     //Boolean

                        /* Exercicio 2 */

let array;
// console.log('a. ', array)  // undefined

array = null;
// console.log('b. ', array)   // NULL

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)  // 11 Elementos

let i = 0;
// console.log('d. ', array[i]) // 3

array[i+1] = 19
// console.log('e. ', array)  // [ 3, 19, 5, 6, 7, 8, 9, 10, 11, 12,13]

const valor = array[i+6]
// console.log('f. ', valor)   // 9                     

                        /* Exercicio de Códigos */

/* 1°- Exercicio */

// let idadeUsuario = prompt("Qual a sua idade? ");
// let idade1 = Number (idadeUsuario);


// let idadeAmiga = prompt("Qual a idade da sua melhor amiga? ");
// let idade2 = Number (idadeAmiga);

// let comparacao = prompt("Sua idade é maior do que a do seu melhor amigo? True ou False");

// let diferenca = idade1 - idade2;

// console.log("A diferença entre as idades é: ",diferenca);

/*2°- Exercicio */

// let n = prompt("Insira um numero par");

// let numeroPar = Number (n);

// let restoDiv = numeroPar % 2;

// console.log("O resto da divisão: ",restoDiv);

// 2.C - Há um padrão nas respostas de numeros pares , todos eles terão o resto da divisão igual a zero.

//2.D - Caso o usuário tente inserir algum numero ímpar , o resto da divisão sempre será igual a 1

/*3°- Exercicio */

// let listaDeTarefas = [];

// let tarefa1 = prompt("Qual é a 1° tarefa você deve fazer?");
// let tarefa2 = prompt("Qual é a 2° tarefa você deve fazer?");
// let tarefa3 = prompt("Qual é a 3°tarefa você deve fazer?");

// listaDeTarefas.push(tarefa1);
// listaDeTarefas.push(tarefa2);
// listaDeTarefas.push(tarefa3);

// console.log(listaDeTarefas);

// let indice = prompt("Digite o indice da tarefa que você realizou? 0,1,2");

// // remoção do elemento a partir do indice selecionado
// listaDeTarefas.splice(indice,1);

// console.log(listaDeTarefas);

/*4°- Exercicio */

// let nomeUsuario = prompt("Qual seu nome?")

// let emailUsuario = prompt("Qual seu email?")

// console.log("O email ",emailUsuario,"foi cadastrado com sucesso. Seja bem vinda(o)",nomeUsuario);
