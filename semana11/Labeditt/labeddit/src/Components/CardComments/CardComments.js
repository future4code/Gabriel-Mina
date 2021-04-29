import React from 'react'
import { Posts, CardStyle, CardContentStyle, PostText} from './CardCommentsStyle'
import Typography from '@material-ui/core/Typography';

const CardComments = (props) => {
   
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
            </CardStyle>

        </Posts>
    )
}

export default CardComments
