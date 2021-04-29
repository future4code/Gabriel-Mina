import React from 'react'
import { Posts, CardStyle, CardContentStyle, PostText, PostComents } from './CardFeedStyle'
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { useHistory } from 'react-router';
import {goToPost} from '../../Router/Coordinator'
import { CardActionArea } from '@material-ui/core';

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
                            Autor(a): {props.username.toLowerCase()}
                        </Typography>
                        <PostText variant="h6" component="h5">
                            {props.text.toLowerCase()}
                        </PostText>
                    </CardContentStyle>
                </CardActionArea>
                <PostComents>
                    <div>
                        <Button onClick={() => vote(1)}><ArrowUpwardIcon/></Button>
                        {props.votesCount}
                        <Button onClick={() => vote(-1)}><ArrowDownwardIcon/></Button>
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
