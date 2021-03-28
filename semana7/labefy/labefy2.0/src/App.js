import react from 'react';
import Footer from './Components/footer/Footer'
import Main from './Components/Main/Main'
import PlayList from './Components/PlayList/PlayList'
import styled from 'styled-components';

const Geral = styled.div`
  padding:0;
  margin:0;
  list-style: none;
  display:flex;
  flex-direction: column;

  @media(max-width:800px){
    display:flex;
    flex-direction: column;
    width:700px;
  }
`
const HeaderCima = styled.header`
    background-color:lightseagreen;
    border:1px solid black;
    width:100%;
    height:80px;
   
`
const BotaoPlayLista = styled.button`
    font:bold 24px Arial, Monaco, monospace;
    font-style:normal;
    color:#ffb700;
    background:#40444a;
    border:6px inset #cccccc;
    text-shadow:0px -1px 10px #222222;
`
const HeaderMargin = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    margin-left:30px;
    width:90%;
`
export default class App extends react.Component {

  state = {
    mudarPagina: "home"
  }

  alteraEstadoPagina = () => {
    if (this.state.mudarPagina === "home") {
      this.setState({ mudarPagina: "playList" })
    } else if (this.state.mudarPagina === "playList") {
      this.setState({ mudarPagina: "home" })
    }
  }

  alteraPagina = () => {
    switch (this.state.mudarPagina) {
      case "home":
        return <Main />
      case "playList":
        return <PlayList />
      default:
        <div></div>
    }
  }

  render() {
    return (
      <Geral>
        <HeaderCima>
          <HeaderMargin>
            <h2>Labefy - Musicas para todos os tipos</h2>
            <BotaoPlayLista onClick={this.alteraEstadoPagina}>Ver Minhas PlayLists</BotaoPlayLista>
          </HeaderMargin>
        </HeaderCima>
        {this.alteraPagina()}
        <Footer />
      </Geral>
    );
  }

}


