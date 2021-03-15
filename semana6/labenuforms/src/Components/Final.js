import React from 'react';
import styled from 'styled-components';

const Titulo = styled.div`
    display:flex;
    justify-content:center;
    font-weight:bold;
`;



export default class Final extends React.Component{

    render(){
        return(
            <div>
                <Titulo>O FORMULÁRIO ACABOU !</Titulo>
                <h2>Muito obrigado por participar! Entraremos em contato!</h2>
            </div>
        );
    }
}