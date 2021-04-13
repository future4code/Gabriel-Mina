import React from 'react'
import { useHistory } from 'react-router';
import styled from 'styled-components'

const Conteudo = styled.div`
  display:flex;
  flex:2;
  min-height:100px;
`

export default function ListTripsPage() {

    const history = useHistory();

    const goToTripApplication = () => {
        history.push("/trips/application")
    }

    return (
        <Conteudo>
            ListTripPage
            <div>
                <button onClick={history.goBack}>voltar</button>
                <button onClick={goToTripApplication}>Inscreva - se </button>
            </div>
        </Conteudo>
    );
}