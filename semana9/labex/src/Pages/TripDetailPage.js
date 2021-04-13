import React from 'react'
import { useHistory } from 'react-router';
import styled from 'styled-components'

const Conteudo = styled.div`
  display:flex;
  flex:2;
  min-height:100px;
`

export default function TripDetailPage() {

    const history = useHistory();

    return (
        <Conteudo>
            Trip detail page
            <div>
                <button onClick={history.goBack}> voltar</button>
                <button> criar</button>
            </div>
        </Conteudo>
    );
}