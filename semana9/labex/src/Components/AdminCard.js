import  {goToTripDetailsPage} from '../Routes/Cordinator'
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router';
import festaplaneta from '../img/festaplaneta.jpg'


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        border: '1px solid black'
    },
    media: {
        height: 140,
    },
});
const AdminCard = (props) => {

    const{ name,id,descricao} = props;

    const classes = useStyles();
    const history = useHistory();

    return (
        <Card className={classes.root} onClick={()=>goToTripDetailsPage(history,id)}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={festaplaneta}
                    title="festa Planeta"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {descricao}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )

}
export default AdminCard