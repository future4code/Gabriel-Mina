import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import { ProtectedPage } from '../Hooks/ProtectedPage';
import  {logOut,goToCreateTripPage} from '../Routes/Cordinator'
import AdminCard from '../Components/AdminCard';
import axios from 'axios';
import UrlBase from '../Constants/Constants'


const Conteudo = styled.div`
  display:flex;
  flex-direction:column;
  flex:2;
  min-height:100px;
`
const Botoes = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin:10px auto;
    width:30%;
`

const ListaDeViagens = styled.div`
    display:grid;
    grid-gap:10px;
    grid-auto-rows: 300px;
    grid-template-columns:repeat(4,1fr);
    margin:10px auto;
    min-height:400px;
    padding: 10px;
`


export default function AdminHomePage() {
    ProtectedPage();

    const history = useHistory();

    const [listTrip, setListTrip] = useState([])

    const getTripList = async () => {
        try {
            const response = await axios.get(`${UrlBase}/trips`);
            setListTrip(response.data.trips)
        } catch (erro) {
            console.log("erro", erro);
        }
    }

    useEffect(() => {
        getTripList();
    }, [])

    const listTripScreen = listTrip.map((trips) => {
        return <AdminCard key={trips.id} name={trips.name} id={trips.id} descricao={trips.description}/>
    })

    return (
        <Conteudo>
            <Botoes>
                <Button variant="contained" color="primary" onClick={()=>logOut(history)}> voltar</Button>
                <Button variant="contained" color="primary" onClick={()=>goToCreateTripPage(history)}> Criar Viagem</Button>
                <Button variant="contained" color="primary" onClick={()=>logOut(history)}> Logout</Button>
            </Botoes>
            <ListaDeViagens>
                {listTripScreen}
            </ListaDeViagens>
        </Conteudo>
    );
}
