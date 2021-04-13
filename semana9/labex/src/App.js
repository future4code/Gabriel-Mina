import styled from 'styled-components'
import Footer from './Components/Footer'
import Header from './Components/Header'

const Principal = styled.div`
  display:flex;
  flex-direction:column;
  height:100vh;
  width:100vw;
`
const Conteudo = styled.div`
  display:flex;
  flex:2;
  min-height:100px;
`

export default function App() {
  return (
    <Principal>
     <Header/>
      <Conteudo>Main</Conteudo>
      <Footer/>
    </Principal>    
  );
}


