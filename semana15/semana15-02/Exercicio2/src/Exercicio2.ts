// 2°A- a entrada sao um array de numeros e a saida é um objeto
// Que outras variáveis compõem essa função? Explicite a tipagem de todas elas 
// 2°B - A constante de numerosOrdenados recebe uma tipagem para order os numeros , assim a variavel deve ser do mesmo tipo

type amostra ={
    numeros:number[],
    obterEstati :(numeros:number[]) => {}
}


function obterEstatisticas(numeros:number[]) {

    const numerosOrdenados = numeros.sort((a:number, b:number) => a - b)

    let soma = 0

    for (let num of numeros) {
        soma += num
    }


    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

const amostraDeIdades :amostra ={
    numeros: [21,19,40,15,5],
    obterEstati :obterEstatisticas
}
const ordernar = amostraDeIdades.obterEstati(amostraDeIdades.numeros)
console.table(ordernar);
