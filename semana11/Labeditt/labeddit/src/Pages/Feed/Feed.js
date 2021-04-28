import React from 'react'
import useProtectedPage from '../../Hooks/useProtectedPage';
import { Principal } from './FeedStyle'
import useRequestData from '../../Hooks/useRequestData';
import { BASE_URL } from '../../Constants/Urls'
import CardFeed from '../../Components/CardFeed/CardFeed'
import loading from '../../Assets/loading.gif'
import CardPost from '../../Components/CarPost/CardPost'





const Feed = () => {
    useProtectedPage();
    const post = useRequestData([], `${BASE_URL}/posts`)

    const postScreen = post.map((post) => {
        return <CardFeed
            id={post.id}
            username={post.username}
            text={post.text}
            commentsCount={post.commentsCount}
            votesCount={post.votesCount}
        />
    })

    return (
        <Principal>
            <CardPost />
            {postScreen && postScreen.length > 0 ? postScreen :<img src={loading}/>}
            
        </Principal>
    )
}
export default Feed;

