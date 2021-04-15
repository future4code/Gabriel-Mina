import { goToTripDetailsPage } from '../Routes/Cordinator'
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router';
import candidato from '../img/candidato.jpg'
import Button from '@material-ui/core/Button';
import styled from 'styled-components'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        border: '1px solid black'
    },
    media: {
        height: 140,
    },
});

const Botoes = styled.div`
    width:330px;
    display:flex;
    justify-content:space-between;
    margin:5px;
`
const CandidateCard = (props) => {

    const { name, country, applicationText } = props;

    const classes = useStyles();
    const history = useHistory();

    return (
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
                <Button variant="outlined" color="primary">Aprovar</Button>
                <Button variant="outlined" color="secondary">Reprovar</Button>
            </Botoes>
        </Card>
    )

}
export default CandidateCard