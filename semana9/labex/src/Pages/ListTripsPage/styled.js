import styled from "styled-components";

export const Conteudo = styled.div`
  display:flex;
  flex-direction:column;
`
export const Botoes = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin:10px auto;
    width:30%;
`

export const ListaDeViagens = styled.div`
    display:grid;
    grid-gap:10px;
    grid-auto-rows: 400px;
    grid-template-columns:repeat(4,1fr);
    margin:10px;
`