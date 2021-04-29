import styled from 'styled-components'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export const CardStyle = styled(Card)`
    width:100%;
    border:1px solid black;
    display:flex;
    min-height:20vh;
    flex-direction:column;
    justify-content:space-between;

`
export const Posts = styled.div`
    width:40vw;
    display:flex;
    flex-direction:column;
    margin:10px 0;
    @media(max-width:800px){
        width:80vw;
        display:flex;
        justify-content:center;
        margin:20px;
    }
`
export const CardContentStyle = styled(CardContent)`
    display:flex;
    flex-direction:column;
`

export const PostName = styled(Typography)`
    display:flex;
    flex:1;
`
export const PostText = styled(Typography)`
    display:flex;
    justify-content:center;
`
export const PostComents = styled(CardActions)`
    display:flex;
    flex:1;
    justify-content:space-between;
`