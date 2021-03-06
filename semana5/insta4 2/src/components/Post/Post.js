import React from 'react'
import './Post.css'

import { IconeComContador } from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import { SecaoComentario } from '../SecaoComentario/SecaoComentario'

import styled from 'styled-components'

// style components
const DivInput = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom:20px;
`;


class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,

    pessoas: [
      {
        nome: "Paulinha",
        foto: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      },
      {
        nome: "Gabriel",
        foto: "https://conteudo.imguol.com.br/c/entretenimento/16/2017/06/27/naruto-1498593686428_v2_900x506.png",
        fotoPost: "https://criticalhits.com.br/wp-content/uploads/2021/01/boruto-54-ler-online.jpg"
      },
      {
        nome: "Anderson",
        foto: "https://www.einerd.com.br/wp-content/uploads/2017/10/Naruto_Uzumaki-890x466.jpg",
        fotoPost: "https://i1.wp.com/narutokonoha.com/wp-content/uploads/2019/10/Assista-a-luta-completa-de-Naruto-vs-Pain-online.jpg?w=1280&ssl=1"
      }
    ],
    
  }

  onClickCurtida = () => {
    if (this.state.curtido) {
      this.setState({
        curtido: false,
        numeroCurtidas: this.state.numeroCurtidas - 1
      });
    } else {
      this.setState({
        curtido: true,
        numeroCurtidas: this.state.numeroCurtidas + 1
      });
    }

  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  adicionarPost = () =>{
    
    const post = {
      foto:this.state.valorInputFoto,
      nome:this.state.valorInputNome,
      fotoPost:this.state.valorInputFotoPost
    }
    console.log(post);
    const novoPost = [...this.state.pessoas,post]

    this.setState({pessoas:novoPost})
  }

  onChangeFoto = (event) => {
    this.setState({
      valorInputFoto:event.target.value
    })
  }
  onChangeNome = (event) =>{
    this.setState({
      valorInputNome:event.target.value
    })
  }

  onChangeFotoPost = (event) =>{
    this.setState({
      valorInputFotoPost:event.target.value
    })
  }

  render() {
    let iconeCurtida

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if (this.state.comentando) {
      componenteComentario = <SecaoComentario
        aoEnviar={this.aoEnviarComentario}
      />
    }

    // inserindo pessoas na tela
    const listaDePessoas = this.state.pessoas.map((pessoa) => {
      return (
        <div>

          <div className={'post-header'}>
            <img className={'user-photo'} src={pessoa.foto} alt={'Imagem do usuario'} />
            <p>{pessoa.nome}</p>
          </div>
          <img className={'post-photo'} src={pessoa.fotoPost} alt={'Imagem do post'} />

          <div className={'post-footer'}>
            <IconeComContador
              icone={iconeCurtida}
              onClickIcone={this.onClickCurtida}
              valorContador={this.state.numeroCurtidas}
            />

            <IconeComContador
              icone={iconeComentario}
              onClickIcone={this.onClickComentario}
              valorContador={this.state.numeroComentarios}
            />
          </div>
          {componenteComentario}
        </div>
      );
    })

    return (
      <div className={'post-container'}>
        <div>{listaDePessoas}</div>
        <DivInput>
          <input
            value={this.state.valorInputFoto}
            onChange={this.onChangeFoto}
            placeholder={"link da imagem de Perfil"}
          ></input>
          
          <input
            value={this.state.valorInputNome}
            onChange={this.onChangeNome}
            placeholder={"Teu nome"}
          ></input>

          <input
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeFotoPost}
            placeholder={"link da imagem do Post"}
          ></input>
          <button onClick={this.adicionarPost}>Adicionar Post</button>
        </DivInput>
      </div>
    );
  }
}

export default Post


/*

<div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>
*/