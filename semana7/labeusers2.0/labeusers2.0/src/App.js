import React from 'react';
import CadastroUsuario from './Components/CadastroUsuario';
import ListaUsuario from './Components/ListaUsuario';
import styled from 'styled-components';


const Principal = styled.div`
    display:flex;
    font-size:50px;
    font-weight:bold;
    justify-content:center;
`;

const Header = styled.div`
  display:flex;
  justify-content:center;
`
const RenderizarApp = styled.div`
  @media(max-width:650px){
    display:flex;
    flex-direction:column;
    position:relative;
  }
`

export default class App extends React.Component {

  state = {
    mudaPagina: "home"
  }

  alteraEstadoPagina = () => {
    if (this.state.mudaPagina === "home") {
      this.setState({ mudaPagina: "listaUsuarios" })
    } else if (this.state.mudaPagina === "listaUsuarios") {
      this.setState({ mudaPagina: "home" })
    }
  }

  alteraPagina = () => {
    switch (this.state.mudaPagina) {
      case "home":
        return <CadastroUsuario />
      case "listaUsuarios":
        return <ListaUsuario />
      default:
        <div></div>
    }
  }

  render() {
    return (
      <div className="App">
        <RenderizarApp>
          <Principal>LabeUsers</Principal>
          <button onClick={this.alteraEstadoPagina}>Lista de Usuarios</button>
          <Header>
            {this.alteraPagina()}
          </Header>
        </RenderizarApp>
      </div>
    );
  }
}
