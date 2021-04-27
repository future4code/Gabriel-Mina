import React from 'react'
import useProtectedPage from '../../Hooks/useProtectedPage';
import { Principal} from './FeedStyle'
import useRequestData from '../../Hooks/useRequestData';
import { BASE_URL } from '../../Constants/Urls'
import CardFeed from '../../Components/CardFeed/CardFeed'
import loading from '../../Assets/loading.gif'

const Feed = () => {
    useProtectedPage();
    const post = useRequestData([], `${BASE_URL}/posts`)
    console.log(post);


    const postScreen = post.map((post) => {
        return <CardFeed 
                    username={post.username}
                    text={post.text}
                    commentsCount={post.commentsCount}
                />
    })

    return (
        <Principal>
            {postScreen && postScreen.length > 0 ? postScreen :<img src={loading}/>}
        </Principal>
    )
}
export default Feed;