import React, {  useState } from 'react'
import { useHistory } from 'react-router';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import axios from 'axios';
import UrlBase from '../../Constants/Constants';
import { countries } from '../../Constants/Country';
import { useForm } from '../../Hooks/useForm';
import useRequest from '../../Hooks/useRequest'
import {Conteudo , Botoes , CreateTrip , InputForm , SelectForm ,Titulo} from './styled'


const initialForm = {
    name: "",
    age: 0,
    applicationText: "",
    profession: "",
    country: ""
}

export default function ApplicationFormPage() {

    const history = useHistory();
    const [tripId, setTripId] = useState("");

    const [form, onchange,resetForm] = useForm(initialForm);
    const [dataAllTrips] = useRequest("/trips",[]);

    
    const ApplyToTrip = async() =>{
        try {
            const response = await axios.post(`${UrlBase}/trips/${tripId}/apply`, form)
            alert(response.data.message)
        } catch (erro) {
            console.log("Erro: ", erro);
        }
    }
    
    const handleClick = (e) => {
        e.preventDefault();
        ApplyToTrip();
        resetForm();        
    }

    const onchangeTrip = (e) => {
        setTripId(e.target.value)
    }

    const listTripsScreen = dataAllTrips.trips && dataAllTrips.trips.map((trips) => {
        return (
            <option key={trips.id} value={trips.id}>{trips.name}</option>
        )
    })


    const listCountryScreen = countries.map((countries) => {
        return (
            <option key={countries} value={countries}>{countries}</option>
        )
    })

    return (
        <Conteudo>
            <Titulo>FORMULÁRIO DE INSCRIÇÃO</Titulo>
            <CreateTrip onSubmit={handleClick}>
                <SelectForm defaultValue="" onChange={onchangeTrip}>
                    <option value="" disabled>Escolha uma Viagem</option>
                    {listTripsScreen}
                </SelectForm>
                <SelectForm name="country" value={form.country} onChange={onchange}>
                    <option value={""} disabled>Escolha um Pais</option>
                    {listCountryScreen}
                </SelectForm>
                <InputForm 
                    name="name"
                    type={"text"}
                    placeholder={"Nome"} 
                    value={form.name} 
                    onChange={onchange} 
                    pattern={"^.{3,}$"}
                    title={"O nome deve ter no mínimo 3 caracteres"}
                    required />
                <InputForm 
                    placeholder={"Idade"} 
                    type={"number"} 
                    name={"age"} 
                    value={form.age} 
                    onChange={onchange} 
                    min={18}
                    required />
                <InputForm 
                    name="applicationText" 
                    type={"text"} 
                    placeholder={"texto de Candidatura"} 
                    value={form.applicationText} 
                    onChange={onchange} 
                    pattern={"^.{30,}$"}
                    title={"O texto deve ter no mínimo 30 caracteres"}
                    required />
                <InputForm
                     name="profession" 
                     type={"text"} 
                     placeholder={"Profissão"} 
                     value={form.profession} 
                     onChange={onchange} 
                     pattern={"^.{10,}$"}
                     title={"A profissão deve ter no mínimo 10 caracteres"}
                     required />
                <Botoes>
                    <Button variant="contained" color="primary" onClick={history.goBack}> voltar</Button>
                    <Button variant="contained" color="primary" type="submit"> enviar</Button>
                </Botoes>
            </CreateTrip>
        </Conteudo>
    );

}

