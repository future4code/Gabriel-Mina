
enum categoriasRoupas {
    VERAO ="verao",
    INVERNO="Inverno",
    BANHO="Banho",
    INTIMA="Intima"
}

function produtos(nome:string,preco:number,classificacao:string):(string|number)[]{

    const produtosBlack =[
        nome= nome,
        preco= preco,
        classificacao=classificacao
    ]

    return produtosBlack
}

console.log(produtos("iphone",3000,"eletronico"));
