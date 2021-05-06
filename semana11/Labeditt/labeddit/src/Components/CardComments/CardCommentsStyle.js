import styled from 'styled-components'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardActions } from '@material-ui/core';

export const CardStyle = styled(Card)`
    width:30vw;
    border:1px solid black;
    display:flex;
    min-height:20vh;
    flex-direction:column;
    justify-content:space-between;

    @media(max-width:800px){
        width:60vw;
        display:flex;
        justify-content:center;
    }
`
export const Posts = styled.div`
    width:30vw;
    display:flex;
    flex-direction:column;
    margin:10px 0;
    @media(max-width:800px){
        width:60vw;
        display:flex;
        justify-content:center;
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
    @media(max-width:800px){
        width:70vw;
        display:flex;
        justify-content:space-between;
    }
`
