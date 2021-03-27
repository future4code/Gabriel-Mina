import React from 'react';
import styled from 'styled-components';
import axios from 'axios'
import {urlBase , authorization} from '../parametro'

const Principal  =styled.div`
    display:flex;
    font-size:50px;
    font-weight:bold;
    justify-content:center;
`;

const Cadastro = styled.div`
    display:flex;
    flex-direction:column;
    width: 400px;
    height:200px;
    background-color:lightblue;
`
const CadastroFilho = styled(Cadastro)`
    display:flex;
    justify-content:space-between;
`

export default class CadastroUsuario extends React.Component {

    state = {
        valorNome: "",
        valorEmail:""
    }

    alteraNome = (e) =>{
        this.setState({valorNome: e.target.value})
    }

    alteraEmail = (e) =>{
        this.setState({valorEmail: e.target.value})
    }

    criarUsuario = () =>{
        const body = {
            name: this.state.valorNome,
            email: this.state.valorEmail
        }

        axios.post(urlBase,body,authorization)
        .then((resposta) =>{
            console.log(resposta.data);
            alert("usuario Criado com sucesso");
            this.setState({ valorNome: "",valorEmail:""})
        }).catch((erro) =>{
            alert("Erro , reveja os campos!");
            console.log(erro);            
        })
    }

    render() {
        return (
            <div>
                <Principal>CadastroUsuario</Principal>
                <Cadastro>
                    <CadastroFilho>
                        <label>Nome Do usuário</label>
                        <input type="text" value={this.state.valorNome} onChange={this.alteraNome} />
                        <label>Email Do usuário</label>
                        <input type="email" value={this.state.valorEmail} onChange={this.alteraEmail} />
                        <button onClick={this.criarUsuario}>Criar Usuario</button>
                    </CadastroFilho>
                </Cadastro>
            </div>
        )
    };
}