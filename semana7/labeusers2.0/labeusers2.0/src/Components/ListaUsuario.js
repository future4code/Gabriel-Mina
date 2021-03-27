import React from 'react';
import styled from 'styled-components';
import axios from 'axios'
import { urlBase, authorization } from '../parametro'

const Principal = styled.div`
    display:flex;
    font-size:50px;
    font-weight:bold;
    justify-content:center;
`;


export default class ListaUsuario extends React.Component {

    state = {
        listaUsuario: []
    }

    componentDidMount() {
        this.listarUsuario();
    }


    listarUsuario = async () => {
        try {
            const resposta = await axios.get(urlBase, authorization);
            this.setState({ listaUsuario: resposta.data })
        } catch (erro) {
            console.log(erro);
        }
    }

    deletarUsuario = (id) => {
        if (window.confirm("Deseja realmente excluir?")) {
            axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, authorization)
                .then((resposta) => {
                    this.listarUsuario();
                    console.log(resposta.data);
                }).catch((erro) => {
                    console.log(erro.resposta.data);
                })
        }
    }

    render() {
        const listarUsuariosTela = this.state.listaUsuario.map((usuarios) => {
            return <li key={usuarios.id}>
                    {usuarios.name}
                    <button onClick={() => this.deletarUsuario(usuarios.id)}>deletar</button>
            </li>
        })
        return (
            <div>
                <Principal>ListaUsuario</Principal>
                <ol>
                    {listarUsuariosTela}
                </ol>
            </div>
        )
    };
}