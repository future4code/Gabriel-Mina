import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

const Principal = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`

export default class App extends React.Component {

  state = {
    atividade: {}
  }

  pegarAtividade = async () => {
    try {
      const resposta = await axios.get("https://www.boredapi.com/api/activity/")
      this.setState({ atividade: resposta.data })
    } catch (erro) {
      console.log(erro);
    }
  }

  render() {
    const { activity, type, price, participants } = this.state.atividade;
    return (
      <div className="App">
        <Principal>
          <h1>Ativadade sortiada do dia</h1>
          <p>Atividade: {activity}</p>
          <p>Participantes: {participants}</p>
          <p>Preço: {price}</p>
          <p>tipo de Atividade: {type}</p>
          <button onClick={this.pegarAtividade}>Atividade do dia</button>
        </Principal>
      </div>
    );
  }

}

