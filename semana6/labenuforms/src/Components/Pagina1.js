import React from 'react';


export default class Pagina1 extends React.Component {


    render(){
        return(
            <div>
                <h1>ETAPA1 - DADOS GERAIS</h1>
                <h2>1-Qual o seu nome?</h2>
                    <input type="text"></input>
                <h2>2- Qual a sua idade?</h2>
                    <input type="text"></input>
                <h2>3- Qual seu email?</h2>
                    <input type="text"></input>
                <h2>4- Qual a sua escolaridade?</h2>
                <select>
                    <option value="item1">Ensino Médio incompleto</option>
                    <option value="item2">Ensino Médio completo</option>
                    <option value="item3">Ensino superior incompleto</option>
                    <option value="item4">Ensino superior completo</option>
                </select>
            </div>
        );
    }
}