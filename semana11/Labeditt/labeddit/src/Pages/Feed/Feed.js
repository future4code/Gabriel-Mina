import React from 'react'
import useProtectedPage from '../../Hooks/useProtectedPage';
import { Principal,TextFieldStyle } from './FeedStyle'
import useRequestData from '../../Hooks/useRequestData';
import { BASE_URL } from '../../Constants/Urls'
import CardFeed from '../../Components/CardFeed/CardFeed'
import loading from '../../Assets/loading.gif'
import CardPost from '../../Components/CarPost/CardPost'
import useForm from '../../Hooks/useForm';


const Feed = () => {
    useProtectedPage();
    const feed = useRequestData([], `${BASE_URL}/posts`)


    const initialState = {
        "text": ""
    }

    const [form, handleInputChange] = useForm(initialState)

   

    const postScreen = feed.posts && feed.posts.map((post) => {
        return <CardFeed
            key={post.id}
            id={post.id}
            username={post.username}
            text={post.text}
            commentsCount={post.commentsCount}
            votesCount={post.votesCount}
        />
    })

    
    return (
        <Principal>
                <TextFieldStyle
                    type={"text"}
                    label={"Buscar Postagem"}
                    variant={'outlined'}
                    fullWidth
                    name={"text"}
                    value={form.text.toLowerCase()}
                    onChange={handleInputChange}
                    margin={'normal'}

                />
            <CardPost />
            {postScreen && postScreen.length > 0 ?
             postScreen.filter((feed)=>{
                    return(form.text ? ((feed.props.username) && (feed.props.username.toLowerCase().includes(form.text)||feed.props.text.toLowerCase().includes(form.text))) : true)
             }) 
             :<img src={loading} alt={loading}/>}
            
        </Principal>
    )
}
export default Feed;

