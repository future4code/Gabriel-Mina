import axios from 'axios';
import styled from 'styled-components'
import { useEffect, useState } from 'react';

const ListadeMatches = styled.div`
    display:grid;
    flex-direction:column;
    flex:1;
    grid-gap:10px;
    min-width:300px;
    grid-template-columns:1fr 1fr;
    margin:30px;
    align-items:center;
    justify-content:center;
    min-height:70vh;
`
const Matchestela = styled.div`
    width:90%;
`
const Imagem = styled.img`
    width:100%;
    height:200px;
    cursor: pointer;
    border-radius:50%;
`
const Name = styled.div`
    display:flex;
    justify-content:center;
    font-size:30px;
`
export default function Matches() {
    const [match, setMatch] = useState([]);

    const retornaMatches = async () => {
        try {
            const resposta = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/matches")
            setMatch(resposta.data.matches);
        } catch (erro) {
            console.log("erro", erro);
        }
    }

    useEffect(() => {
        retornaMatches();
    }, [])

    const listarMatchNaTela = () =>{
        return match.map((pessoas) => {
            return (
                <Matchestela>
                    <Imagem src={pessoas.photo} />
                    <Name>{pessoas.name}</Name>
                </Matchestela>
            )
        }
        )
    }
    
    return (
        <ListadeMatches>
            {listarMatchNaTela()}
        </ListadeMatches>
    )
}