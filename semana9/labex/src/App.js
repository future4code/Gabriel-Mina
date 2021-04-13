import styled from 'styled-components'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Router from './Routes/Router'

const Principal = styled.div`
  display:flex;
  flex-direction:column;
`
const TamanhoMain = styled.div`
  display:flex;
  flex:2;
  min-height:100px;
`

export default function App() {
  return (
    <Principal>
      <Header/>
        <TamanhoMain>
          <Router />
        </TamanhoMain>
      <Footer />
    </Principal>
  );
}


