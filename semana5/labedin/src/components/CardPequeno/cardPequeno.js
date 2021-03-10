import React from 'react';
import './cardPequeno.css'

function informacoes(props){
    return (
        <div className="info-pessoal">
            <div className="informacoes">
                <p>{props.nome}</p>
            </div>
            <div className="informacoes">
                <p>{props.descricao}</p>
            </div>
        </div>
    );
}

export default informacoes;