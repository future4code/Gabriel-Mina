import React from 'react'
import { useHistory } from 'react-router';
import styled from 'styled-components'

const Conteudo = styled.div`
  display:flex;
  flex:2;
  min-height:100px;
`

export default function LoginPage() {

    const history = useHistory();

    const goTohome = () =>{
        history.push("/")
    }

    return (
        <Conteudo>
            Login Page
            <div>
                <button onClick={goTohome}> voltar</button>
                <button> Entrar</button>
            </div>
        </Conteudo>
    );
}