import React from 'react'
import { Posts, CardStyle, CardContentStyle, PostText,PostComents} from './CardCommentsStyle'
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { Button } from '@material-ui/core';

const CardComments = (props) => {
    
    const voteComments = async(decision) =>{
        const body ={
            "direction": decision
        }

        try{
            const response = await axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${props.idPost}/comment/${props.id}/vote`,body,{
                headers:{
                    Authorization: localStorage.getItem("token")
                }
            })
            console.log(response.data);
        }catch(erro){
            console.log(erro.response.data);
        }
    } 

    return (
        <Posts>
            <CardStyle>
                    <CardContentStyle>
                        <Typography color="textSecondary" gutterBottom>
                            Autor(a): {props.username}
                        </Typography>
                        <PostText variant="h6" component="h5">
                            {props.text}
                        </PostText>
                    </CardContentStyle>
                    <PostComents>
                    <div>
                        <Button onClick={() => voteComments(1)}><ArrowUpwardIcon/></Button>
                        {props.votesCount}
                        <Button onClick={() => voteComments(-1)}><ArrowDownwardIcon/></Button>
                    </div>
                    
                </PostComents>
            </CardStyle>

        </Posts>
    )
}

export default CardComments
