import react from 'react';
import styled from 'styled-components';
import axios from 'axios';
const Principal = styled.div`
    height:100vh;
    width:100%;
    display:flex;
    justify-content:center;
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
export default class PlayList extends react.Component {

    state = {
        lista: []
    }
    
    componentDidMount(){
        this.listarPlayList();
    }

    listarPlayList = async() =>{
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",{
            headers:{
                Authorization:"gabriel-mina-cruz"
            }
        }).then((resposta) =>{
            this.setState({lista:resposta.data.result.list})
        }).catch((erro)=>{
            console.log(erro.resposta.data);
        })
    }
 
    deletarPlayList = (id) =>{
        if(window.confirm("deseja realmente excluir")){
            axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,{
                headers:{
                    Authorization:"gabriel-mina-cruz"
                }
            }).then((resposta)=>{
                this.listarPlayList();
                console.log(resposta.data);
            }).catch((erro)=>{
                console.log(erro.resposta.data);
            })
        }
    }

    render() {
        const listarNaTela = this.state.lista.map((musicas)=>{
            return <li key={musicas.id}>
                    {musicas.name}
                    <BotaoPlayLista onClick={()=> this.deletarPlayList(musicas.id)}>Deletar</BotaoPlayLista>
                   </li>
        })
        return (
            <div>
                <Principal>
                    <Playlistas>
                        <h2>Playlist existentes na sua conta</h2>
                        <ListaMusicas>
                            {listarNaTela}
                        </ListaMusicas>
                    </Playlistas>
                </Principal>
            </div>
        )
    }
}