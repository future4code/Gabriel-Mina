import React from 'react'
import { Posts, CardStyle, CardContentStyle, PostText, PostComents } from './CardFeedStyle'
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardActionArea } from '@material-ui/core';
import { useHistory } from 'react-router';
import {goToPost} from '../../Router/Coordinator'

const CardFeed = (props) => {

    const history = useHistory();

    const vote = async (direction) => {
        const body = {
            direction: direction
        }

        try {
            const response = await axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${props.id}/vote`, body, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            });
            console.log(response.data);
        } catch (erro) {
            console.log(erro.response.data);
        }
    }

    return (
        <Posts>
            <CardStyle>
                <CardActionArea onClick={()=> goToPost(history,props.id)}>
                    <CardContentStyle>
                        <Typography color="textSecondary" gutterBottom>
                            Autor(a): {props.username}
                        </Typography>
                        <PostText variant="h6" component="h5">
                            {props.text}
                        </PostText>
                    </CardContentStyle>
                </CardActionArea>
                <PostComents>
                    <div>
                        <Button onClick={() => vote(1)}>Positivo</Button>
                        {props.votesCount}
                        <Button onClick={() => vote(-1)}>negativo</Button>
                    </div>
                    <div>
                        {props.commentsCount} Comentários
                    </div>
                </PostComents>
            </CardStyle>

        </Posts>
    )
}

export default CardFeed
