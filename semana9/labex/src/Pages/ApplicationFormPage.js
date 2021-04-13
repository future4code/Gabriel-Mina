import React from 'react'
import { useHistory } from 'react-router';
import styled from 'styled-components'

const Conteudo = styled.div`
  display:flex;
  flex:2;
  min-height:100px;
`

export default function ApplicationFormPage() {

    const history = useHistory();

    return (
        <Conteudo>
            Form Page
            <div>
                <button onClick={history.goBack}>voltar</button>
                <button>Enviar</button>
            </div>
        </Conteudo>
    );
}