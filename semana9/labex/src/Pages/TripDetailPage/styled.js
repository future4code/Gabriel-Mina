import styled from "styled-components";

export const Conteudo = styled.div`
  display:flex;
`

export const Viagens = styled.div`
    display:flex;
    flex:2;
    padding:10px;
    flex-direction:column;
    justify-content:space-around;
`

export const ViagensId = styled.div`
    min-height:300px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    margin-bottom: 70px;
`

export const CandidatosPendentes = styled.div`
  display: flex;
  overflow: auto;
  height: 50%;
`

export const CandidatosAprovados = styled.div`
    display:grid;
    flex:1;
    grid-template-columns: repeat(3,1fr);
    align-items:center;
    color: #fff;;
    font-size:30px;
    margin-bottom: 20px;
`

export const InformacoesViagens = styled.div`
    background-color:lightgrey;
    font-weight:bold;
    font-size:20px;
    display:flex;
    flex-direction:column;
    align-items:center;
    border:1px solid black;
`