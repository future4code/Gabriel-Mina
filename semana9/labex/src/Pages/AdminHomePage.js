import React from 'react'
import { useHistory } from 'react-router';
import styled from 'styled-components'

const Conteudo = styled.div`
  display:flex;
  flex:2;
  min-height:100px;
`

export default function AdminHomePage() {

    const history = useHistory();

    const goToTripCreate = () =>{
        history.push("/admin/trips/create")
    }

    const goToHome = () =>{
        history.push("/")
    }

    const goToLogin = () =>{
        history.push("/login")
    }

    return (
        <Conteudo>
            Admin home page
            <div>
                <button onClick={goToHome}> voltar</button>
                <button onClick={goToTripCreate}> Criar Viagem</button>
                <button onClick={goToLogin}> Logout</button>
            </div>
        </Conteudo>
    );
}