
function somaNumeros(numero1:number,numero2:number):{}{


    const resposta ={
        soma: numero1 + numero2,
        subtracao : numero1 - numero2,
        mult: numero1 * numero2,
        maior: numero1 > numero2 ? numero1 : numero2
    }

    return resposta
}

console.log(somaNumeros(10,5));
