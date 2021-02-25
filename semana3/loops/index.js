/* 1°- Exercicio */
// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

/* 
    Este programa executa uma repetição com a condição do numero ser menor que 5. Assim , ele soma os valor dos numeros que
    entraram na condição (0+1+2+3+4). O resultado será 10.
*/

/* 2°-Exercicio */

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

/*
Será impresso dentre os numeros do array , somente os maiores que 19.
O for of não será suficiente para acessar cada indice do array , sabendo que o for of lê o array por completo, e para 
poder acessar os indices , teria que haver uma variavel que representasse esse indice
*/

/* DASAFIO 1 */

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "));
// let quantidadeAtual = 0;
// while(quantidadeAtual < quantidadeTotal){
//   let linha = "";
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "0";
//   }
//   console.log(linha);
//   quantidadeAtual++;
// }

/*
O resultado ao inserir na variavel quantidadeTotal o valor 4 , será 4 linha , sendo a primeira com 1 zero , a segunda 
com 2 zeros , a terceira com 3 zeros e a quarta com 4 zeros. Sendo estes valores concatenados na variavel linha.
*/

/* 3°- Exercicio */

// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103];

//3.A
// for (let array of arrayOriginal) {
//     console.log(array);
// }

//3.B
// for (let array of arrayOriginal) {
//     console.log(array/10);
// }

//3.C
// const arrayPares = [];
// for(let i = 0; i<arrayOriginal.length; i++){
//     if(arrayOriginal[i] % 2 == 0){
//         arrayPares.push(i);
//     }
// }
// console.log(arrayPares);

//3.D
// for(let i = 0; i < arrayOriginal.length; i++){
//     console.log("O elemento do index:",i,"é:",arrayOriginal[i]);
// }

//3.E
// let maior = 0;
// let menor = 0;

// for(let i = 0; i < arrayOriginal.length; i++){
//     if(maior < arrayOriginal[i]){
//         maior = arrayOriginal[i];
//         menor = maior;
//     } 
//     if(menor > arrayOriginal[i]){
//         menor = arrayOriginal[i];
//     }
// }
// console.log("O maior numero do array é :",maior);
// console.log("O menor numero do array é :",menor);

                                    /* DESAFIOOO */
                            
// let numero =  Math.floor(Math.random()*10);
// console.log("Vamos jogar!");

// let qtdVezes = 0;
// let numeroAdvinhado;

// while(numeroAdvinhado !== numero){
//     numeroAdvinhado = Number(prompt("Digite o numero chutado"));
//     console.log("O numero chutado foi:",numeroAdvinhado);

//     if(numero > numeroAdvinhado){
//         console.log("Errou  , numero escolhido é MENOR");
//     }else if(numero < numeroAdvinhado){
//         console.log("Errou  , numero escolhido é MAIOR");
//     }else{
//         console.log("Acertou , o numero era:",numero);
//     }
//     qtdVezes++;
// }
// console.log("O numero de tentativas foram:",qtdVezes);

