import React from 'react'
import {Posts, PostName, PostText, PostComents } from './CardFeedStyle'

const CardFeed = (props) =>{

    return(
        <Posts>
            <PostName>
                {props.username}
            </PostName>
            <PostText>
                {props.text}
            </PostText>
            <PostComents>
                {props.commentsCount}
            </PostComents>
        </Posts>
    )
}

export default CardFeed