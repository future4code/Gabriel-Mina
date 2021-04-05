import React from "react";
import Home from './COMPONENTS/Home';
import ListaPessoas from './COMPONENTS/ListaPessoas';


export default class App extends React.Component {

  state = {
    mudarPagina :"home"
  }

  mudarPagina = () => {
    if (this.state.mudarPagina === "home") {
      this.setState({ mudarPagina: "listaPessoas" })
    } else if (this.state.mudarPagina === "listaPessoas") {
      this.setState({ mudarPagina: "home" })
    }
  }

  renderizaPagina = () => {
    switch (this.state.mudarPagina) {
      case "home":
        return <Home />
      case "listaPessoas":
        return <ListaPessoas />
      default:
        <div></div>
    }
  }

  render() {
    return (
      <div className="App">
          <h1>Lista de Pessoas</h1>
          <button onClick={this.mudarPagina}>Trocar de Pagina</button><br></br><br></br>
          {this.renderizaPagina()}
      </div>
    );
  }
}
