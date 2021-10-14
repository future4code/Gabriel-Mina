import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import axios from 'axios';
import UrlBase from '../../Constants/Constants'
import festaplaneta from '../../img/festaplaneta.jpg'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Conteudo,Botoes, ListaDeViagens} from './styled';



const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        height:400,
        border: '1px solid black'
    },
    media: {
        height: 140,
    },
});
export default function ListTripsPage() {
    const classes = useStyles();
    const history = useHistory();

    const [listTrip, setListTrip] = useState([])

    const goToTripApplication = () => {
        history.push("/trips/application")
    }


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
        return (
            <Card className={classes.root} onClick={()=> goToTripApplication()} >
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
                        <Typography gutterBottom variant="h5" component="h2">
                            Planeta: {trips.planet}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            Data: {trips.date}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            Quantos dias: {trips.durationInDays}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    })
    return (
        <Conteudo>
            <ListaDeViagens>
                {listTripScreen ? listTripScreen : <p>Carregando...</p> }
            </ListaDeViagens>
        </Conteudo>
    );
}