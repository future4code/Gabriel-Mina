import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import axios from 'axios';
import UrlBase from '../Constants/Constants';
import { countries } from '../Constants/Country';
import { useForm } from '../Hooks/useForm';


const Conteudo = styled.div`
  display:flex;
  flex-direction:column;
  flex:2;
  min-height:300px;
`

const Botoes = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin:10px auto;
    width:60%;
`

const CreateTrip = styled.form`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;
    margin:10px auto;
    width:30%;
    min-height:400px;
  `
const InputForm = styled.input`
    width: 100%;
    height: 30px;
    border-radius: 10px;
    padding: 4px 8px;
    border-width: 1px;
    border-color: gray;
    margin: 0 0 15px 0;`

const SelectForm = styled.select `
    width: 518px;
    height: 40px;
    border-radius: 10px;
    padding: 4px 8px;
    border-width: 1px;
    margin: 0 0 15px 0;
`

const Titulo = styled.h1`
    text-align:center;
`
const initialForm = {
    name: "",
    age: 0,
    applicationText: "",
    profession: "",
    country: ""
}

export default function ApplicationFormPage() {

    const history = useHistory();
    const [listTrip, setListTrip] = useState([])
    const [tripId, setTripId] = useState("");

    const [form, onchange] = useForm(initialForm)

    const getTripList = async () => {
        try {
            const response = await axios.get(`${UrlBase}gabriel-mina-cruz/trips`);
            setListTrip(response.data.trips)
        } catch (erro) {
            console.log("erro", erro);
        }
    }

    const ApplyToTrip = async () => {
        console.log(form);
        try {
            const response = await axios.post(`${UrlBase}gabriel-mina-cruz/trips/${tripId}/apply`, form)
            alert(response.data.message)
        } catch (erro) {
            console.log("Erro: ", erro);
        }

    }

    const handleClick = (e) => {
        e.preventDefault();
        ApplyToTrip();
    }

    const onchangeTrip = (e) => {
        setTripId(e.target.value)
    }

    const listTripsScreen = listTrip.map((trips) => {
        return (
            <option key={trips.name} value={trips.name}>{trips.name}</option>
        )
    })


    const listCountryScreen = countries.map((countries) => {
        return (
            <option key={countries} value={countries}>{countries}</option>
        )
    })

    useEffect(() => {
        getTripList();
    }, [])

    return (
        <Conteudo>
            <Titulo>INSCREVA - SE EM UMA VIAGEM</Titulo>
            <CreateTrip onSubmit={handleClick}>
                <SelectForm defaultValue="" onChange={onchangeTrip}>
                    <option value="" disabled>Escolha uma Viagem</option>
                    {listTripsScreen}
                </SelectForm>
                <SelectForm name="country" value={form.country} onChange={onchange}>
                    <option value={""} disabled>Escolha um Pais</option>
                    {listCountryScreen}
                </SelectForm>
                <InputForm name="name" type={"text"} placeholder={"Nome"} value={form.name} onChange={onchange} required />
                <InputForm placeholder={"Idade"} type={"number"} name={"age"} value={form.age} onChange={onchange} required />
                <InputForm name="applicationText" type={"text"} placeholder={"texto de Candidatura"} value={form.applicationText} onChange={onchange} required />
                <InputForm name="profession" type={"text"} placeholder={"Profissão"} value={form.profession} onChange={onchange} required />
                <Botoes>
                    <Button variant="outlined" color="primary" onClick={history.goBack}> voltar</Button>
                    <Button variant="outlined" color="primary" type="submit"> enviar</Button>
                </Botoes>
            </CreateTrip>
        </Conteudo>
    );

}

