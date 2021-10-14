import { createGlobalStyle } from 'styled-components';
import Footer from './Components/Footer/Footer'
import Header from './Components/Header'
import Router from './Routes/Router'
import { Principal, TamanhoMain } from './styled'


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Principal>
        <Header />
        <div>
          <Router />
        </div>
        <Footer />
      </Principal>
    </>
  );
}


