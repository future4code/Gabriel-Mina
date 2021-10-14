import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router';
import { ProtectedPage } from '../../Hooks/ProtectedPage';
import Button from '@material-ui/core/Button';
import CandidateCard from '../../Components/CandidateCard';
import UrlBase from '../../Constants/Constants'
import { Conteudo, Viagens, ViagensId, CandidatosPendentes, CandidatosAprovados, InformacoesViagens } from './styled'

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
            console.log("Erro", erro.response.data.message);
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
                    <Button variant="contained" color="primary" onClick={history.goBack}>Voltar</Button>
                </ViagensId>
                <CandidatosAprovados>
                    <h2>Candidatos Aprovados</h2>
                    {candidateAproved && candidateAproved.length > 0 ? candidateAproved : <p>Não há candidatos aprovados</p>}
                </CandidatosAprovados>
                <CandidatosPendentes>
                    {candidatesScreen && candidatesScreen.length > 0 ? candidatesScreen : <p>Nao há nenhum candidato pendente</p>}
                </CandidatosPendentes>
            </Viagens>
        </Conteudo>
    )
}
