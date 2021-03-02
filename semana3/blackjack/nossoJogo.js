/*
 EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'

    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 */


let somaUsuario;
let somaMaquina;
   console.log("Bem vindo ao jogo de BlackJack");

let confirm = prompt("Quer iniciar uma nova rodada? sim ou nao");

 if(confirm ==="sim"){
   //começa uma nova rodada
   const carta = comprarCarta();
   const carta1 = comprarCarta();

   console.log("Usuário - cartas",carta.texto,"- pontuação",carta.valor);
   console.log("Usuário - cartas",carta1.texto,"- pontuação",carta1.valor);

   const carta2 = comprarCarta();
   const carta3 = comprarCarta();

   console.log("Computador - cartas",carta2.texto,"- pontuação",carta2.valor);
   console.log("Computador - cartas",carta3.texto,"- pontuação",carta3.valor);

   somaUsuario = carta.valor + carta1.valor;
   somaMaquina = carta2.valor + carta3.valor;

   if(somaMaquina >= somaUsuario){
      console.log("O computador ganhou");
   }else if(somaMaquina <= somaUsuario){
      console.log("O usuário ganhou");
   }else{
      console.log("Empate !");
   }

 }else{
   console.log("O jogo acabou!");
 }