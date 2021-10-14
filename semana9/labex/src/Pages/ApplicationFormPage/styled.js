import styled from "styled-components";

export const Conteudo = styled.div`
  display:flex;
  flex-direction:column;
  flex:2;
  min-height:300px;
`

export const Botoes = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin:10px auto;
    width:60%;
`

export const CreateTrip = styled.form`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;
    margin:10px auto;
    width:30%;
    min-height:400px;
  `
export const InputForm = styled.input`
    width: 100%;
    height: 30px;
    border-radius: 10px;
    padding: 4px 8px;
    border-width: 1px;
    border-color: gray;
    margin: 0 0 15px 0;
`
export const SelectForm = styled.select `
    width: 518px;
    height: 40px;
    border-radius: 10px;
    padding: 4px 8px;
    border-width: 1px;
    margin: 0 0 15px 0;
`

export const Titulo = styled.h1`
    text-align:center;
    color:#fff;
`