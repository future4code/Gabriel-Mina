import { useState, useEffect } from 'react';
import { BodyAstro, Foto, Botoes, AlinhaBotao, Imagens, NomeIdade, Descricao } from './style';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CloseIcon from '@material-ui/icons/Close';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import axios from 'axios';

export default function Body() {
  const [perfil, setPerfil] = useState({})

  const RetornaPerfil = async () => {
    try {
      const resposta = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriel-cruz/person")
      setPerfil(resposta.data.profile)
    } catch (erro) {
      console.log("erro:", erro.resposta);
    }
  }

  const escolhePerfil = async (id, escolha) => {
    const body = {
      "id": id,
      "choice": escolha
    }
    try {
      axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/choose-person", body);
      RetornaPerfil();
    } catch (erro) {
      console.log("erro:", erro);
    }
  }

  const limpar = async () => {
    try {
      await axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/clear");
      RetornaPerfil();
    } catch (erro) {
      console.log("erro", erro)
    }
  }

  useEffect(() => {
    RetornaPerfil();
  }, [])


  const mostraTela = () => {
    return (
      <Foto>
        <Imagens src={perfil.photo} />
        <NomeIdade>{perfil.name} , {perfil.age} Anos</NomeIdade>
        <Descricao>{perfil.bio}</Descricao>
      </Foto>
    )
  }

  return (
    <BodyAstro>
      {mostraTela()}
      <Botoes>
        <AlinhaBotao>
          <CloseIcon fontSize="large" style={{ fontSize: 70, cursor: "pointer" }} onClick={() => escolhePerfil(perfil.id, false)}>X</CloseIcon>
          <KeyboardReturnIcon fontSize="large" style={{ fontSize: 70, cursor: "pointer" }} onClick={limpar}>back</KeyboardReturnIcon>
          <FavoriteIcon fontSize="large" style={{ fontSize: 70, cursor: "pointer" }} onClick={() => escolhePerfil(perfil.id, true)}>V</FavoriteIcon>
        </AlinhaBotao>
      </Botoes>
    </BodyAstro>
  )
}