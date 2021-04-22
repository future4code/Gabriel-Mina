import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router';
import { ProtectedPage } from '../Hooks/ProtectedPage';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import CandidateCard from '../Components/CandidateCard';
import UrlBase from '../Constants/Constants'

const Conteudo = styled.div`
  display:flex;
  flex:2;
  min-height:600px;

`
const Viagens = styled.div`
    min-height:800px;
    display:flex;
    flex:2;
    margin:10px;
    flex-direction:column;
    justify-content:space-around;
`
const ViagensId = styled.div`
    background-color:lightblue;
    min-height:300px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`
const CandidatosPendentes = styled.div`
    display:grid;
    grid-gap:10px;
    grid-auto-rows: 350px;
    grid-template-columns:repeat(3,1fr);
    margin:20px auto;
    min-height:400px;
`
const CandidatosAprovados = styled.div`
    display:flex;
    flex:1;
    background-color:lightgrey;
    align-items:center;
    border:1px solid black;
    flex-direction:column;
    font-weight:bold;
    font-size:30px;
`
const InformacoesViagens = styled.div`
    background-color:lightgrey;
    font-weight:bold;
    font-size:20px;
    display:flex;
    flex-direction:column;
    align-items:center;
    border:1px solid black;
`
export default function CreateTripPage() {

    ProtectedPage();
    const { id } = useParams();
    const [trip, setTrip] = useState({});
    const [candidate, setCandidate] = useState([])
    const history = useHistory();

    const getTripDetail = async () => {
        const token = window.localStorage.getItem("token");
        try {
            const response = await axios.get(`${UrlBase}/trip/${id}`, {
                headers: {
                    Auth: token
                }
            });
            setTrip(response.data.trip);
            setCandidate(response.data.trip.candidates)
        } catch (erro) {
            console.log("Erro", erro);
        }
    }

    useEffect(() => {
        getTripDetail();
    }, [])

    const tripScreen = () => {
        return (
            <InformacoesViagens>
                <p>Nome da viagem:  {trip.name}</p>
                <p>Descricao:  {trip.description}</p>
                <p>Planeta:  {trip.planet}</p>
                <p>Duração:  {trip.durationInDays} dias</p>
                <p>Data:  {trip.date}</p>
            </InformacoesViagens>
        )
    }

    const candidatesScreen = candidate.map((candidate) => {
        return <CandidateCard
            idTrip={id}
            getTripDetail={getTripDetail}
            key={candidate.id}
            id={candidate.id}
            name={candidate.name}
            country={candidate.country}
            applicationText={candidate.applicationText}
        />
    })

    const candidateAproved = trip.approved && trip.approved.map((candidate) => {
        return <p key={candidate.id}>{candidate.name}</p>
    })

    return (
        <Conteudo>
            <Viagens>
                <ViagensId>
                    {tripScreen()}
                    <Button onClick={history.goBack}>Voltar</Button>
                </ViagensId>
                <CandidatosPendentes>
                    {candidatesScreen}
                </CandidatosPendentes>
            </Viagens>
            <CandidatosAprovados>
                <h2>Candidatos Aprovados</h2>
                {candidateAproved && candidateAproved.length > 0 ? candidateAproved : <p>Não há candidatos aprovados</p>}
            </CandidatosAprovados>
        </Conteudo>
    )
}
