import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
`
export const TituloContainer = styled.h2`
    font-family:Apple Chancery, cursive;
    text-transform:uppercase;
    font-size:20px;
    color:#fff;
`
export const ListagemViagem = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    margin: 10px;
    width:100%;
`
export const PlanetasCima = styled.div`
    display: flex;
`
export const ExplorePlanetas = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
`
export const Inspiracoes = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
`

export const ImagemPlaneta = styled.img`
    height:300px;
    width:300px;
    margin:0 10px;
    border:1px solid white;
`
export const ImagemPlanetaViagens = styled.img`
    height:300px;
    width:100%;
    border:1px solid white;
`
export const Planetas = styled.div`
    display:flex;
    display: grid;
    grid-template-columns: repeat(3,1fr);
`
export const PlanetasFilho = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin: 0 5px;
`
export const PlanetasFilhoInspiracoes = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin: 0 5px;
`
export const Paragrafo = styled.p`
    font-weight: bold;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

`
