import react from 'react';
import styled from 'styled-components';

const HeaderCima = styled.header`
    background-color:lightseagreen;
    border:1px solid black;
    width:100%;
    
    @media(max-width:800px){
    display:flex;
    flex-direction: column;
    height:150vh;
    margin-top:50px;
    justify-content:space-between;
  }
`
const HeaderMargin = styled.div`
    display:flex;
    justify-content:center;
    @media(max-width:800px){
        text-align:center;
    }
`
const FooterLink = styled.div`
    display:flex;
    flex-direction:row;
    height:300px;
    margin: 0 auto;
    
    @media(max-width:800px){
    display:flex;
    flex-direction: column;
  }
`
const FooterLinkFilho = styled.div`
    margin: 5px;
    width:25%;
    font-size:20px;
    text-align:center;
`
const TituloFooter = styled.h3`
    color: #ffffff;
    font-size: 20px;
    font-weight: bold;
    line-height: 1.4;
    text-transform: uppercase;
`
export default class Footer extends react.Component {
    render() {
        return (
            <div>
                <HeaderCima>
                    <FooterLink>
                        <FooterLinkFilho>
                            <TituloFooter>Empresa</TituloFooter>
                            <p>Sobre</p>
                            <p>Vagas</p>
                            <p>Para artistas</p>
                        </FooterLinkFilho>
                        <FooterLinkFilho>
                        <TituloFooter>Comunidade</TituloFooter>
                            <p>Investidores</p>
                            <p>Desenvolvedores</p>
                        </FooterLinkFilho>
                        <FooterLinkFilho>
                        <TituloFooter>Links uteis</TituloFooter>
                            <p>Suporte</p>
                            <p>Aplicativo móvel Grátis</p>
                        </FooterLinkFilho>
                        <FooterLinkFilho>
                        <TituloFooter>Plano Premium</TituloFooter>
                            <p>Individual</p>
                            <p>Universitário</p>
                            <p>Familia</p>
                        </FooterLinkFilho>
                    </FooterLink>
                    <HeaderMargin>
                        <h2>&copy; Todos os direitos Dirigidos para Labefy - Musicas para todos os tipos</h2>
                    </HeaderMargin>
                </HeaderCima>
            </div>
        )
    }
}