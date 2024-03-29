import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import candidato from '../img/candidato.jpg'
import Button from '@material-ui/core/Button';
import styled from 'styled-components'
import UrlBase from '../Constants/Constants'

const useStyles = makeStyles({
    root: {
        border: '1px solid black',
        height: 320,

    },
    media: {
        height: 140,
    },
});

const Botoes = styled.div`
    display:flex;
    justify-content:space-between;
    margin:0 5px;
`
const Main = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    flex: none;
    margin-right: 10px;
`
const CandidateCard = (props) => {

    const { idTrip, getTripDetail, id, name, country, applicationText } = props;

    const classes = useStyles();

    const decideCadidate = async (decision) => {
        const body = {
            "approve": decision
        }
        const token = window.localStorage.getItem("token")
        try {
            await axios.put(`${UrlBase}/trips/${idTrip}/candidates/${id}/decide`, body, {
                headers: {
                    auth: token
                }
            })
            alert("Decisão registrada com sucesso!")
            getTripDetail();
        } catch (erro) {
            console.log("Erro", erro.response.data.message);
        }
    }

    return (
        <Main>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={candidato}
                        title="candidato"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            {country}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {applicationText}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <Botoes>
                    <Button variant="outlined" color="secondary" onClick={() => decideCadidate(false)}>Reprovar</Button>
                    <Button variant="outlined" color="primary" onClick={() => decideCadidate(true)}>Aprovar</Button>
                </Botoes>
            </Card>
        </Main>
    )

}
export default CandidateCard