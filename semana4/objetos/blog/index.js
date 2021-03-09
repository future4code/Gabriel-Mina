//capturando os valores do html

let arrayObjetos = [];


const enviarFormulario = () =>{  

    let titulo = document.getElementById("titulo-post");
    let autor = document.getElementById("autor-post");
    let conteudo = document.getElementById("conteudo-post");

    let localImpresso = document.getElementById("container-de-posts");
    
    const formulario = {
        titulo: titulo.value,
        autor: autor.value,
        conteudo: conteudo.value
    }
    
    // validação de preenchimento
    if(formulario.titulo == "" || formulario.autor == "" || formulario.conteudo == ""){
        alert("Preencha todos os dados");
        return;
    }else{
        localImpresso.innerHTML +=`
                             <article class="artigo-post">
                                <h2>${formulario.titulo}</h2>
                                <h3>${formulario.autor}</h3>
                                <h4>${formulario.conteudo}</h4>
                             </article>
                        `;
    }
    
    
    // colocando no array de objetos
    arrayObjetos.push(formulario);

    titulo.value ="";
    autor.value = "";
    conteudo.value = "";

    console.log(arrayObjetos);
}
