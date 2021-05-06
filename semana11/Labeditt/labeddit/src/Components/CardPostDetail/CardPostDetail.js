import React from 'react'
import { Posts, CardStyle, CardContentStyle, PostText, PostComents } from './CardPostDetailStyle'
import axios from 'axios';
import Button from '@material-ui/core/Button';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Typography from '@material-ui/core/Typography';


const CardFeed = (props) => {

    const vote = async (direction) => {
        const body = {
            direction: direction
        }

        try {
            await axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${props.id}/vote`, body, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            });
        } catch (erro) {
            console.log(erro.response.data);
        }
    }

    return (
        <Posts>
            <CardStyle>
                    <CardContentStyle>
                        <Typography color="textSecondary" >
                            Autor(a): {props.username}
                        </Typography>
                        <PostText component="h1">
                            {props.text}
                        </PostText>
                    </CardContentStyle>
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
