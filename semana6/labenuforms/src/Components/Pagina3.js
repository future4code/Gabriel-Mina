import React from 'react';


export default class Pagina1 extends React.Component {


    render(){
        return(
            <div>
                <h1>ETAPA3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
                <h2>5- Por que você não terminou um curso de graduação?</h2>
                    <input type="text"></input>
                <h2>6-   Você fez algum curso complementar?</h2>
                <select>
                    <option value="item1" selected>Nenhum</option>
                    <option value="item2">Curso técnico</option>
                    <option value="item3">Curso de inglês</option>
                </select>
            </div>
        );
    }
}