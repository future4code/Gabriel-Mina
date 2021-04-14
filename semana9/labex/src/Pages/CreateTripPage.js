import React, { useState } from 'react'
import { useHistory } from 'react-router';
import styled from 'styled-components'
import { ProtectedPage } from '../Hooks/ProtectedPage';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
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

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '55ch',
        },
    },
}));

const CreateTrip = styled.form`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin:10px auto;
    width:30%;
    min-height:400px;
  `
const Titulo = styled.h1`
    text-align:center;
  `
export default function TripDetailPage() {
    ProtectedPage();

    const classes = useStyles();
    const history = useHistory();

    const [name, setName] = useState("")
    const [planet, setPlanet] = useState("")
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")
    const [duration, setDuration] = useState("")

    const handleChangeName = (e) => {
        setName(e.target.value)
    }
    const handleChangePlanet = (e) => {
        setPlanet(e.target.value)
    }
    const handleChangeDate = (e) => {
        setDate(e.target.value)
    }
    const handleChangeDescription = (e) => {
        setDescription(e.target.value)
    }
    const handleChangeDuration = (e) => {
        setDuration(e.target.value)
    }

    const createTrip = async () => {

        const body = {
            "name": name,
            "planet": planet,
            "date": date,
            "description": description,
            "durationInDays": duration
        }


        try {
            const token = window.localStorage.getItem("token")

            const response = await axios.post(`${UrlBase}gabriel-mina-cruz/trips`,body, {
                headers: {
                    auth: token
                }
            })
            console.log(response.data);
            history.push("/admin/trips/list")
        }catch(erro){
            console.log("Erro: ", erro);
        }
        
    }

    return (
        <Conteudo>
            <Titulo>CRIAR VIAGEM</Titulo>
            <CreateTrip className={classes.root} noValidate autoComplete="off">
                <TextField value={name} onChange={handleChangeName} id="standard-secondary" label="Nome Completo" required color="secondary" />
                <InputLabel id="demo-simple-select-label">Escolha um Planeta</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={planet}
                    onChange={handleChangePlanet}
                >
                    <MenuItem value={"Mercúrio"}>Mercúrio</MenuItem>
                    <MenuItem value={"Vênus"}>Vênus</MenuItem>
                    <MenuItem value={"Terra"}>Terra</MenuItem>
                    <MenuItem value={"Marte"}>Marte</MenuItem>
                    <MenuItem value={"Júpter"}>Júpter</MenuItem>
                    <MenuItem value={"Saturno"}>Saturno</MenuItem>
                    <MenuItem value={"Urano"}>Urano</MenuItem>
                    <MenuItem value={"Netuno"}>Netuno</MenuItem>
                </Select>
                <TextField value={date} onChange={handleChangeDate} id="standard-secondary" type="date" color="secondary" required />
                <TextField value={description} onChange={handleChangeDescription} id="standard-secondary" label="Descrição" color="secondary" required />
                <TextField value={duration} onChange={handleChangeDuration} type="number" id="standard-secondary" label="Duração em Dias" color="secondary" required min="50" />
            </CreateTrip>
            <Botoes>
                <Button variant="outlined" color="primary" onClick={history.goBack}> voltar</Button>
                <Button variant="outlined" color="primary" onClick={createTrip}> criar</Button>
            </Botoes>
        </Conteudo>
    );
}
