//Exercício 1

function inverteArray(array) {
  // implemente sua lógica aqui
    return array.reverse();
}

//Exercício 2

function retornaNumerosParesElevadosADois (array) {
   // implemente sua lógica aqui,
   let arrayAux = [];

   for( let i = 0 ; i < array.length ; i++){
      if(array[i] % 2 === 0){
         arrayAux.push(Math.pow(array[i],2));
      }
   }
  return arrayAux;
}

//Exercício 3

function retornaNumerosPares (array) {
   // implemente sua lógica aqui
   let arrayAux = [];

   for( let i = 0 ; i < array.length ; i++){
      if(array[i] % 2 === 0){
         arrayAux.push(array[i]);
      }
   }
  return arrayAux;
}

//Exercício 4

function retornaMaiorNumero(array) {
   // implemente sua lógica aqui
   let maior = 0;
   array.forEach((arrayMaior)=>{
      if(arrayMaior > maior){
         maior = arrayMaior;
      }
   })
   return maior;
}

//Exercício 5

function retornaQuantidadeElementos (array) {
   // implemente sua lógica aqui
   return array.length;

}

//Exercício 6

function retornaExpressoesBooleanas() {
   // implemente sua lógica aqui

   const booleano1 = true
   const booleano2 = false
   const booleano3 = !booleano2 
   const booleano4 = !booleano3 
   const arrayExpressoes = [];

   const a = (booleano1 && booleano2 && !booleano4);
   const b = (booleano1 && booleano2) || !booleano3
   const c = (booleano2 || booleano3) && (booleano4 || booleano1)
   const d = !(booleano2 && booleano3) || !(booleano1 && booleano3)
   const e = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
   
   arrayExpressoes.push(a);
   arrayExpressoes.push(b);
   arrayExpressoes.push(c);
   arrayExpressoes.push(d);
   arrayExpressoes.push(e);

   return arrayExpressoes;
}

//Exercício 7

function retornaNNumerosPares(n) {
   // implemente sua lógica aqui
   const array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
   const arrayPares = [];
   const arrayRetorno = [];
   array.forEach((pares) =>{
      if(pares % 2 == 0){
         arrayPares.push(pares);
      }
   }) 
   for(let i = 0 ; i < n ; i++){
      arrayRetorno.push(arrayPares[i]);
   }
   return arrayRetorno; 
}

// Exercício 8

function checaTriangulo(a, b, c) {
  // implemente sua lógica aqui
  let equilatero;
  let isosceles;
  let escaleno;
  let arrayTriangulos  = []
 if(a === b && b === c && c ===a){
    equilatero = "Equilátero";
 }else if(a === b && a === c){
    isosceles = "Isósceles";
 }else{
   escaleno = "Escaleno"
 }
 
 
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   // implemente sua lógica aqui
   let maior = 0;
   let divisao;
   if(num1 > num2){
      maior = num1;
      menor = num2;
   }else{
      maior = num2;
      menor = num1;
   }

   if(maior % menor == 1){
      divisao = false;
   }
   divisao = true;

   let dif = maior -  menor;
   

   const comparacao = {
      maiorNumero:maior,
      maiorDivisivelporMenor:divisao,
      diferenca :dif
   }
   return comparacao;
}

// Exercício 10

function segundoMaiorEMenor(array) {
   // implemente sua lógica aqui
   
}

//Exercício 11

function ordenaArray(array) {
   // implemente sua lógica aqui
   // [20, 13, -1, 2, 5, 49, -40, 10, 70, 5]
   

   for (let j = 1; j < array.length; ++j) {
      let x = array[j];
      let i;
         for (i = j-1; i >= 0 && array[i] > x; --i) 
            array[i+1] = array[i];
            array[i+1] = x;
}
//função sort
//   array.sort((a,b)=>{
//    return a - b ;
//   });

  return array;
}

// Exercício 12

function filmeFavorito() {
   // implemente sua lógica aqui
   const nomes = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
   }
  return (nomes);
}

// Exercício 13

function imprimeChamada() {
   // implemente sua lógica aqui
   const filme = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
   }
   return `Venha assistir ao filmeVenha assistir ao filme ${filme.nome},
          de ${filme.ano}, 
          dirigido por ${filme.diretor} 
          e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]} , ${filme.atores[3]}.`;

}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui
   const triangulo = {
      largura: (lado1),
      altura: (lado2), 
      perimetro: (2 * (lado1 + lado2)),
      area: (lado1 * lado2)
   }
   return (triangulo);
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui

   // erro no arquivo teste.js ao instanciar o endereco = pessoa.endereco !!!!!!!!!!!!!!!!!!!!!!!!

   const pessoaAnonima = {
      nome:"ANÔNIMO",
      idade: pessoa.idade,
      email: pessoa.email,
      // endereco = pessoa.endereco
   }
   return (pessoaAnonima);
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
   let maiores = [];
   arrayDePessoas.filter((maioresIdade) =>{
      if(maioresIdade.idade > 18){
         maiores.push(maioresIdade);
      }
   })
   return (maiores);
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
   let menores = [];
   arrayDePessoas.filter((menoresIdade) =>{
      if(menoresIdade.idade < 18){
         menores.push(menoresIdade);
      }
   })
   return (menores);

}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
   let novoArray = [];
   for(let i = 0 ; i < array.length ; i++){
      novoArray.push(array[i]*2);
   }
   return (novoArray);
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  // implemente sua lógica aqui
  let novoArray = [];
   for(let i = 0 ; i < array.length ; i++){
      novoArray.push((array[i]*2).toString());
   }
  return (novoArray);
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
   let novoArray = [];
   for(let i = 0 ; i < array.length ; i++){
      if(array[i] % 2 == 0){
         novoArray.push((array[i]).toString() + " é par");
      }else{
         novoArray.push((array[i]).toString() + " é ímpar");
      }
   
   }
   return(novoArray);
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   // implemente sua lógica aqui
   const pessoasPermitidas = [];
   pessoas.filter((permitidas) => {
      if(permitidas.altura >= 1.5 && (permitidas.idade > 14 && permitidas.idade < 60)){
         pessoasPermitidas.push(permitidas);
      }
   })
  return(pessoasPermitidas);
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   // implemente sua lógica aqui
  const pessoasNPermitidas = [];
  pessoas.filter((naoPermitido) =>{
   if(1.5 >= naoPermitido.altura && (14 > naoPermitido.idade && 60 > naoPermitido.idade)){
      pessoasNPermitidas.push(naoPermitido);
   }
  });
  return (pessoasNPermitidas);
}

//Exercício 19
  const consultas = [
   { nome: "João", genero: "masculino", cancelada: false, dataDaConsulta: "01/10/2019" },
   { nome: "Pedro", genero: "masculino", cancelada: true, dataDaConsulta: "02/10/2019" },
   { nome: "Paula", genero: "feminino", cancelada: false, dataDaConsulta: "03/11/2019" },
   { nome: "Márcia", genero: "feminino", cancelada: true, dataDaConsulta: "04/11/2019" }
 ]

function retornaEmailConsulta() {
  // implemente sua lógica aqui

}

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  // implemente sua lógica aqui
}