import React from 'react'
import useProtectedPage from '../../Hooks/useProtectedPage';
import { Principal } from './FeedStyle'
import useRequestData from '../../Hooks/useRequestData';
import { BASE_URL } from '../../Constants/Urls'
import CardFeed from '../../Components/CardFeed/CardFeed'
import loading from '../../Assets/loading.gif'
import CardPost from '../../Components/CarPost/CardPost'
import { Button, TextField } from '@material-ui/core';
import useForm from '../../Hooks/useForm';


const Feed = () => {
    useProtectedPage();
    const feed = useRequestData([], `${BASE_URL}/posts`)
    
    const initialState = {
        "text": ""
    }

    const [form, handleInputChange] = useForm(initialState)

    const onSubmitForm = (e) => {
        e.preventDefault();
        // postFilter();
    }

    // const postFilter = () =>{
    //     return feed.posts && feed.posts.filter((feed)=>
    //          form.text ? feed && feed.props && feed.props.username && feed.props.username.includes(form.text) : true
    //     )
    // } 

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
             <form onSubmit={onSubmitForm}>
                <TextField
                    type={"text"}
                    label={"Buscar Postagem"}
                    variant={'outlined'}
                    fullWidth
                    name={"text"}
                    value={form.text}
                    onChange={handleInputChange}
                    margin={'normal'}
                    required
                />
                <Button
                    type={"submit"}
                    variant="contained"
                    margin={'normal'}
                    color="primary"
                    fullWidth>
                    Buscar feed
                        </Button>
            </form>
            <CardPost />
            {postScreen && postScreen.length > 0 ? postScreen :<img src={loading} alt={loading}/>}
            
        </Principal>
    )
}
export default Feed;

