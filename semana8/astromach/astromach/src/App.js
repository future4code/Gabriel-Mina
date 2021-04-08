import { useState } from 'react';
import styled from 'styled-components';
import React from 'react';
import Header from './pages/Header/Header';
import Body from './pages/Body/Body'
import Matches from './pages/Matches/Matches'

const Principal = styled.div`
  background-color:lightblue;
  display:flex;
  min-height:100vh;
  align-items:center;
  justify-content:center;
`
const Match = styled.div`
  display:flex;
  height:90%;
  width:40%;
  flex-direction:column;
  background-color:#ffffff;
  @media(max-width:600px){
    width:500px;
  }
`

function App() {
  const[trocaTela,setTrocaTela] = useState("Home");
  
  const renderizatela = () =>{
    switch(trocaTela){
      case "Home":
        return <Body/>
      case "Matches":
        return <Matches/>
      default:
        <div></div>
    }
  }
  const TrocatelaRenderizada = () =>{
    if(trocaTela ==="Home"){
      setTrocaTela("Matches")
    }else if(trocaTela === "Matches"){
      setTrocaTela("Home")
    }
  }
  return (
    <Principal>
      <Match>
        <Header
          teste={TrocatelaRenderizada}
        />
        {renderizatela()}
      </Match>
    </Principal>
  );
}

export default App;
