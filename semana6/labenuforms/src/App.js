import React from 'react';
import styled from 'styled-components'
import Pagina1 from './Components/Pagina1';
import Pagina2 from './Components/Pagina2';
import Pagina3 from './Components/Pagina3';
import Final from './Components/Final';

const Principal =styled.div`
    display:flex;
    align-content:center;
    align-items:center;
    justify-content:center;
`;
const Botaozin = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  margin-top:30px;
  
`;

export default class App extends React.Component{
  state = {
    etapa: 1
  }
   
  renderizaEtapa = () =>{
    switch (this.state.etapa){
      case 1:
        return <Pagina1/>
      case 2:
        return <Pagina2/>
      case 3:
        return <Pagina3/>
      case 4:
        return <Final/>
      default:
          alert("404 - Pagina não encontrada")
    }
  }

  proximaEtapa = () =>{
    this.setState({etapa: this.state.etapa + 1})
  }

  EtapaAnteriro = () =>{
    this.setState({etapa: this.state.etapa - 1})
  }

  escondeBotao = () =>{
    
  }

  render(){
    return (
      <div>
        <Principal>
          {this.renderizaEtapa()}
        </Principal>
        <Botaozin>
        <button onClick={this.EtapaAnteriro}>Etapa Anterior</button>
          <button onClick={this.proximaEtapa}>Proxima etapa</button>
        </Botaozin>  
      </div>
    );
  }
}

