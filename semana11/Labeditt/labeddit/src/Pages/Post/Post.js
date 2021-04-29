import React from 'react'
import { useParams } from 'react-router';
import useProtectedPage from '../../Hooks/useProtectedPage';
import useRequestData from '../../Hooks/useRequestData';
import CardPostDetail from '../../Components/CardPostDetail/CardPostDetail'
import { Principal,Comments } from './PostStyle'
import { Button, TextField } from '@material-ui/core';
import useForm from '../../Hooks/useForm';
import { createComment } from '../../Service/useRequestPost'
import { BASE_URL } from '../../Constants/Urls';
import CardComments from '../../Components/CardComments/CardComments'



const Post = () => {
    useProtectedPage();

    const { id } = useParams();
    const getDetail = useRequestData({}, `${BASE_URL}/posts/${id}`)


    const initialState = {
        "text": ""
    }
    const [form, handleInputChange, clear] = useForm(initialState)

    const onSubmitForm = (e) => {
        e.preventDefault();
        createComment(form, id, clear)
    }


    const commentsScreen = getDetail.post && getDetail.post.comments.length > 0 && getDetail.post.comments.map((comments) => {
        return (
            <CardComments
                key={comments.username}
                id={comments.id}
                idPost={id}
                username={comments.username}
                text={comments.text}
                votesCount={comments.votesCount}
                >
            </CardComments>
        )
    })



    return (
        <Principal>
            { getDetail.post && 
            <CardPostDetail
                id={getDetail.post.id}
                username={getDetail.post.username}
                text={getDetail.post.text}
                votesCount={getDetail.post.votesCount}
                commentsCount={getDetail.post.commentsCount}
            />}

            <p><h2>Comentários</h2></p>
            <Comments>{commentsScreen && commentsScreen.length > 0 ? commentsScreen : <p>Sem comentários</p>}</Comments>
            
            <form onSubmit={onSubmitForm}>
                <TextField
                    type={"text"}
                    label={"Comentario"}
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
                    Enviar Comentario</Button>
            </form>
        </Principal>
    )
}
export default Post;