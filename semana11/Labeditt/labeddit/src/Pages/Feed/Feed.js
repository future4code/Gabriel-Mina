import React, { useEffect, useState } from 'react'
import useProtectedPage from '../../Hooks/useProtectedPage';
import { Principal, TextFieldStyle } from './FeedStyle'
import useRequestData from '../../Hooks/useRequestData';
import { BASE_URL } from '../../Constants/Urls'
import CardFeed from '../../Components/CardFeed/CardFeed'
import loading from '../../Assets/loading.gif'
import CardPost from '../../Components/CarPost/CardPost'
import useForm from '../../Hooks/useForm';
import axios from 'axios';


const Feed = () => {
    useProtectedPage();
    let [dataFeed, setDataFeed] = useState([])
    dataFeed = useRequestData([], `${BASE_URL}/posts`)

    // chamada da api para atualizar automaticamento a pagina apos um post criado
    const getData = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/posts`, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })
            setDataFeed(response.data)
        } catch (erro) {
            console.log(erro.response.data.message)
        }
    }
    useEffect(() => {
        getData();
    }, [])

    const initialState = {
        "text": ""
    }

    const [form, handleInputChange] = useForm(initialState)



    const postScreen = dataFeed.posts && dataFeed.posts.map((post) => {
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
                label={"Buscar Postagem (Usuario ou texto)"}
                variant={'outlined'}
                fullWidth
                name={"text"}
                value={form.text.toLowerCase()}
                onChange={handleInputChange}
                margin={'normal'}

            />
            <CardPost
                getData={getData}
            />
            {postScreen && postScreen.length > 0 ?
                postScreen.filter((feed) => {
                    return (form.text ? ((feed.props.username) && (feed.props.username.toLowerCase().includes(form.text) || feed.props.text.toLowerCase().includes(form.text))) : true)
                })
                : <img src={loading} alt={loading} />}

        </Principal>
    )
}
export default Feed;

