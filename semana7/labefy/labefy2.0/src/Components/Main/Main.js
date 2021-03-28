import react from 'react';
import styled from 'styled-components';
import axios from 'axios';
import imagem1 from './img/charlie.png'
import imagem2 from './img/baroes1.jpg'
import imagem3 from './img/djavan.jpg'
import imagem4 from './img/skilet.jpg'
import imagem5 from './img/tim.jpg'
import imagem6 from './img/slipknot.jpg'

const Principal = styled.div`
    height:150vh;
    width:100%;
`
const MainDiv = styled.div`
    display:flex;
    flex-direction:column;
    height:100%;
`
const MainDivFilha = styled.div`
    display:flex;
    flex-direction:column;
    flex-grow:1;
    border:1px solid black;
    background-color: lightgray;
`
const TituloDivFilha = styled.h3`
    font-weight:bold;
    text-transform:uppercase;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
`
const PlayListFulano = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    height:100%;
    @media(max-width:800px){
        display:flex;
        flex-direction:column;
    }
`
const ListaFulano = styled.div`
    font-size:20px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;
    text-transform:uppercase;
`
const ListaDeMusicas = styled.div`
    display:grid;
    grid-gap:10px;
    grid-template-columns: auto auto auto;
    padding: 5px;
    width:60%;
    @media(max-width:800px){
        display:grid;
        grid-gap:120px;
        grid-template-columns: 100px 90px 70px;
    }
`
const ListaDeMusicasEscutadas = styled.div`
    display:grid;
    grid-gap:10px;
    grid-template-columns: auto auto auto;
`
const Imagens = styled.img`
    width:250px;
    height:150px;
`
const PrincipalDivFilha = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    height:300px;
    text-align:center;
    @media(max-width:800px){
        height:20vh;
    }
`
const BotaoPlayLista = styled.button`
    font:bold 24px Arial, Monaco, monospace;
    font-style:normal;
    color:#ffb700;
    background:#40444a;
    border:6px inset #cccccc;
    text-shadow:0px -1px 10px #222222;
`
export default class Main extends react.Component {

    state = {
        valorPlayList: ""
    }

    alteraNomePlayList = (e) => {
        this.setState({ valorPlayList: e.target.value })
    }

    criarPlayList = () => {
        const body = {
            name: this.state.valorPlayList
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body, {
            headers: {
                Authorization: "gabriel-mina-cruz"
            }
        }).then((resposta) => {
            alert("Playlist criada com sucesso");
            this.setState({ valorPlayList: "" })
        }).catch((erro) => {
            alert("Erro!");
        })
    }

    render() {
        return (
            <Principal>
                <MainDiv>
                    <MainDivFilha>
                        <TituloDivFilha>PlayList de outras pessoas</TituloDivFilha>
                        <PlayListFulano>
                            <ListaFulano>
                                <p>PlayList de Fulano</p>
                                <p>Ouça também a PlayList de Fulano</p>
                            </ListaFulano>
                            <ListaDeMusicas>
                                <Imagens src={imagem1}></Imagens>
                                <Imagens src={imagem2}></Imagens>
                                <Imagens src={imagem3}></Imagens>
                                <Imagens src={imagem4}></Imagens>
                                <Imagens src={imagem5}></Imagens>
                                <Imagens src={imagem6}></Imagens>
                            </ListaDeMusicas>
                        </PlayListFulano>
                    </MainDivFilha>

                    <MainDivFilha>
                        <TituloDivFilha>
                            <ListaFulano>
                                <p>Oque tem escutado ultimamente</p>
                            </ListaFulano>
                            <ListaDeMusicasEscutadas>
                                <Imagens src={imagem1}></Imagens>
                                <Imagens src={imagem2}></Imagens>
                            </ListaDeMusicasEscutadas>
                        </TituloDivFilha>
                    </MainDivFilha>

                    <MainDivFilha>
                        <TituloDivFilha>
                            <PrincipalDivFilha>
                                <p>Criar uma playList</p>
                                <label>Nome da PlayList</label>
                                <input type="text" value={this.state.valorPlayList} onChange={this.alteraNomePlayList} />
                                <BotaoPlayLista onClick={this.criarPlayList}>Enviar</BotaoPlayLista>
                            </PrincipalDivFilha>
                        </TituloDivFilha>
                    </MainDivFilha>
                </MainDiv>
            </Principal>
        )
    }
}