// Guarda a lista de despesas que serão colocadas no innerHTML
let arrDespesas = [];

imprimirDespesas(arrDespesas);
imprimirExtrato();


// PRIMEIRO
function imprimirDespesas(despesas){
    let divDespesas = document.getElementById('despesas');
    divDespesas.innerHTML = '<p><u>Despesas Detalhadas</u></p>';

    // AQUI VEM A IMPLEMENTAÇÃO   despesa(valor, tipo , descricao)
    despesas.forEach((despesasAdicionadas) => {
        divDespesas.innerHTML +=`<p>
                                    valor: R$${despesasAdicionadas.valor}  |
                                    tipo: ${despesasAdicionadas.tipo} |
                                    descrição: ${despesasAdicionadas.descricao}  
                                </p>`
    });
}


// SEGUNDO 
function imprimirExtrato(){
    let divExtrato = document.getElementById('extrato');
    let gastoTotal = 0;
    let gastoAlimentacao = 0;
    let gastoUtilidades = 0;
    let gastoViagem = 0;

    // AQUI VEM A IMPLEMENTAÇÃO
     arrDespesas.filter((despesas) =>{
        if(despesas.tipo === "alimentação"){
            gastoAlimentacao += despesas.valor;
        }else if(despesas.tipo === "utilidades"){
            gastoUtilidades += despesas.valor;
        }else if(despesas.tipo === "viagem"){
            gastoViagem += despesas.valor;
        }
        gastoTotal = gastoAlimentacao + gastoUtilidades + gastoViagem;
     }) 


    divExtrato.innerHTML = `<p>Extrato: Gasto Total: R$${gastoTotal} | Alimentação: R$${gastoAlimentacao} | 
                                        Utilidades: R$${gastoUtilidades} | Viagem: R$${gastoViagem}</p>`
}


function limparFiltros() {
    document.getElementById('tipoFiltro').value = "";
    document.getElementById('valorFiltroMin').value = "";
    document.getElementById('valorFiltroMax').value = "";
    
}



function adicionarDespesa(){
    let valorCdt = document.getElementById('valorCadastro');
    let tipoCtd = document.getElementById('tipoCadastro');
    let descricaoCtd = document.getElementById('descricaoCadastro');

    if(validarValor(valorCdt) && validarTipo(tipoCtd) && validarDescricao(descricaoCtd)){
        let novaDespesa = {
            valor: Number(valorCdt.value),
            tipo: tipoCtd.value,
            descricao: descricaoCtd.value,
        }

        // adiciona no array de objetos as despesas
        arrDespesas.push(novaDespesa);
        
        valorCdt.value = "";
        tipoCtd.value = "";
        descricaoCtd.value = "";

        
        limparFiltros()
        imprimirDespesas(arrDespesas)
        imprimirExtrato()
    } else {
        alert("`Faltou algum valor ou algum valor é um número negativo`")
    }
}



// TERCEIRO
function filtrarDespesas(){
    let tipoFiltro = document.getElementById('tipoFiltro').value;
    let valorMin = Number(document.getElementById('valorFiltroMin').value);
    let valorMax = Number(document.getElementById('valorFiltroMax').value);

    let tipoFiltro1 = document.getElementById('tipoFiltro');
    let valorMin1 = Number(document.getElementById('valorFiltroMin'));
    let valorMax1 = Number(document.getElementById('valorFiltroMax'));

    
    

    // AQUI NESSA VARIÁVEL VEM A IMPLEMENTAÇÃO
    // Criar as proprias validações decorrente 
    if(validarTipo(tipoFiltro1) && validarValor(valorMin1)  && validarValor(valorMax1) ){

        console.log("if",tipoFiltro1);
        console.log("if",valorMax1);
        console.log("if",valorMin1);
    
        imprimirDespesas(arrDespesas.filter((despesas) => {
            if(despesas.tipo === tipoFiltro && despesas.valor > valorMin && despesas.valor < valorMax)
                return true;
        }));

    }else{
        console.log("else",tipoFiltro1);
        console.log("else",valorMax1);
        console.log("else",valorMin1);
        alert("`Faltou algum valor ou algum valor é um número negativo`")
    }

      
}



// FunÇoes que fazem validaÇoes dos inputs de criaÇao de despesas 

// NÃO SE PREOCUPEM EM ENTENDER ESSAS FUNÇÕES

function validarValor(valor){
    if(valor.value.length > 0 && parseInt(valor.value) > 0){
        return true
    }
    return false
}

function validarTipo(tipo){
    if(tipo.value !== ""){
        return true
    }
    return false
}

function validarDescricao(texto){
    if(texto.value.replace(/ /g,"").length !== 0){
        return true
    }
    return false
}