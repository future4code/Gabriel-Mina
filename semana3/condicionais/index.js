/* 1°- Exericicio */

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if(numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

/*
Este código verifica se o numero é impar ou par . Se o resto da divisão de um numero for igual a 0 , ele é par,
caso contrário ele é impar. No quesito de passar no teste , só será efetuado com o numero for PAR.
*/

/* 2°- Exercicio */

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     // break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

/*
2.A- O código serve para atribuir o valor da fruta , de acordo com qual fruta for escolhida.
2.B- Será impresso ("O preço da fruta maça é R$ 2.25")
2.C- Como não existe o break , o switch passará direto , entrando no default e reatribuindo o valor da variavel preco, de 5.5 para 5.
*/

/* 3°-Exercicio */

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

/*
3.A- A primeira linha esta atribuindo a variavel o valor digitado pelo usuário. Já que o tipo de variavel recebio pelo
prompt é string , utilizamos o CAST para converter a STRING para NUMBER.

3.B- A mensagem será ("Esse numero passou no teste") , porém há um erro de referÊncia ,afirmando que a variavel "mensagem"
não foi definida.Quando colocamos "-10" , o numero não entra na condição do IF e só imprime o console.

3.C- O erro do console significa que a variavel esta no bloco de condição , assim ela não é reconhecida fora do bloco.
*/

/* 4°-Exercicio */

// const idade = Number(prompt("Digite sua idade?"));

// if(idade >= 18){
//     console.log("Você pode dirigir");
// }else{
//     console.log("Você não pode dirigir");
// }

/*5°-Exercicio */

// const turno =  prompt("Qual turno você estuda? M (matutino) ou V (Vespertino) ou N (Noturno)");

// if(turno ==="M"){
//     console.log("Bom dia!.");
// }else if(turno ==="V"){
//     console.log("Bom tarde!.");
// }else{
//     console.log("Boa noite!.");
// }

/*6°- Exercicio */

// const turno =  prompt("Qual turno você estuda? M (matutino) ou V (Vespertino) ou N (Noturno)");

// switch(turno){
//     case "M":
//         console.log("Bom dia!.");
//         break;
//     case "V":
//         console.log("Bom tarde!.");
//         break;
//     case "N":
//         console.log("Boa noite!.");
//         break;
//     default:
//         console.log("Turno inválido");
// }

/*7°- Exercicio*/

// const genero = prompt("Qual genero do filme?");
// const preco = Number(prompt("Qual o preço do ingresso?"));

// if(genero ==="fantasia" && preco<=15){
//     console.log("Bom filme!");
// }else{
//     console.log("Escolha outro filme");
// }

                                        
