import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import { ProtectedPage } from '../Hooks/ProtectedPage';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import UrlBase from '../Constants/Constants'
import festaplaneta from '../img/festaplaneta.jpg'


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
`
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        border: '1px solid black'
    },
    media: {
        height: 140,
    },
});
export default function AdminHomePage() {
    ProtectedPage();

    const classes = useStyles();
    const history = useHistory();

    const [listTrip, setListTrip] = useState([])

    const goToTripCreate = () => {
        history.push("/admin/trips/create")
    }


    const logOut = () => {
        window.localStorage.removeItem("token");
        history.push("/login")
    }


    const getTripList = async () => {
        try {
            const response = await axios.get(`${UrlBase}gabriel-mina-cruz/trips`);
            setListTrip(response.data.trips)
        } catch (erro) {
            console.log("erro", erro);
        }
    }

    useEffect(() => {
        getTripList();
    }, [])

    const listTripScreen = listTrip.map((trips) => {
        return (
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={festaplaneta}
                        title="festa Planeta"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {trips.name}
                    </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {trips.description}
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    })

    return (
        <Conteudo>
            <Botoes>
                <Button variant="outlined" color="primary" onClick={logOut}> voltar</Button>
                <Button variant="outlined" color="primary" onClick={goToTripCreate}> Criar Viagem</Button>
                <Button variant="outlined" color="primary" onClick={logOut}> Logout</Button>
            </Botoes>
            <ListaDeViagens>
                {listTripScreen}
            </ListaDeViagens>
        </Conteudo>
    );
}
