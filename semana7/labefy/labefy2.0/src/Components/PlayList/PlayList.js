import react from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Principal = styled.div`
    height:100vh;
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    align-items:center;
`
const Playlistas = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border:1px solid black;
    width:50%;
    height:100%;
`
const BotaoPlayLista = styled.button`
    font:bold 24px Arial, Monaco, monospace;
    font-style:normal;
    color:#ffb700;
    background:#40444a;
    border:6px inset #cccccc;
    text-shadow:0px -1px 10px #222222;
`

const ListaMusicas = styled.ol`
    font-size:30px;
`
const TituloDivFilha = styled.h3`
    font-weight:bold;
    text-transform:uppercase;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
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

export default class PlayList extends react.Component {

    state = {
        lista: [],
        detalhes: [],
        valorNome: "",
        valorArtista: "",
        valorUrl: "",
        inserirMusica:""
    }

    alteraNome = (e) => {
        this.setState({ valorNome: e.target.value })
    }

    alteraArtista = (e) => {
        this.setState({ valorArtista: e.target.value })
    }

    alteraUrl = (e) => {
        this.setState({ valorUrl: e.target.value })
    }

    componentDidMount() {
        this.listarPlayList();
    }

    listarPlayList = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
            headers: {
                Authorization: "gabriel-mina-cruz"
            }
        }).then((resposta) => {
            this.setState({ lista: resposta.data.result.list })
        }).catch((erro) => {
            console.log(erro.resposta.data);
        })
    }

    deletarPlayList = (id) => {
        if (window.confirm("deseja realmente excluir")) {
            axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, {
                headers: {
                    Authorization: "gabriel-mina-cruz"
                }
            }).then((resposta) => {
                this.listarPlayList();
                console.log(resposta.data);
            }).catch((erro) => {
                console.log(erro.resposta.data);
            })
        }
    }

    detalhesPlayList = (id) => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, {
            headers: {
                Authorization: "gabriel-mina-cruz"
            }
        }).then((resposta) => {
            console.log("respostaData", resposta.data);
            this.setState({ detalhes: resposta.data.result.tracks })
            console.log("state", this.state.detalhes);
        }).catch((erro) => {
            console.log("errooo", erro);
        })
    }

    inserirMusica = (id) => {
        const body = {
            "name": this.state.valorNome,
            "artist": this.state.valorArtista,
            "url": this.state.valorUrl
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, body, {
            headers: {
                Authorization: "gabriel-mina-cruz"
            }
        }).then((resposta) => {
            console.log("respostaData", resposta.data);
            alert("Musica inserida com sucesso");
        }).catch((erro) => {
            console.log(erro.resposta.data);
        })
    }

    inserirMusicaForm = (e) =>{
        this.setState({inserirMusica: e.target.value})
    }

    render() {
        const listarNaTela = this.state.lista.map((musicas) => {
            return <li key={musicas.id}>
                {musicas.name}
                <BotaoPlayLista onClick={() => this.deletarPlayList(musicas.id)}>Deletar</BotaoPlayLista>
                <BotaoPlayLista onClick={() => this.detalhesPlayList(musicas.id)}>Detalhes</BotaoPlayLista>
            </li>
        })

        const dorpdonw = this.state.lista.map((musicas) => {
            return <option
                value={musicas.name}
            >
                {musicas.name}
            </option>

        })

        const listaDetalhes = this.state.detalhes.map((musicas) => {
            return <div key={musicas.id}>
                <p>Nome: {musicas.name}</p>
                <p>Artista: {musicas.artist}</p>
                <p>Url: {musicas.url}</p>
            </div>
        })

        return (
            <div>
                <Principal>
                    <Playlistas>
                        <h2>Playlist existentes na sua conta</h2>
                        <ListaMusicas>
                            {listarNaTela}
                        </ListaMusicas>
                        {listaDetalhes}
                    </Playlistas>
                    <TituloDivFilha>
                        <PrincipalDivFilha>
                            <p>Inserir Musica</p>
                            <label>Nome:</label>
                            <input type="text" value={this.state.valorNome} onChange={this.alteraNome} />
                            <label>Artista:</label>
                            <input type="text" value={this.state.valorArtista} onChange={this.alteraArtista} />
                            <label>Url clip:</label>
                            <input type="text" value={this.state.valorUrl} onChange={this.alteraUrl} />
                            <label>Insira qual playList</label>
                            <form>
                                <select value={this.state.inserirMusica} onChange={this.inserirMusicaForm}>
                                    {dorpdonw}
                                </select><br></br>
                                <input type="submit" value="Enviar" />
                            </form>
                        </PrincipalDivFilha>
                    </TituloDivFilha>
                </Principal>
            </div>
        )
    }
}