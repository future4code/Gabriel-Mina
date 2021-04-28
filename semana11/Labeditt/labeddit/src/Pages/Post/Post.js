import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import useProtectedPage from '../../Hooks/useProtectedPage';
import useRequestData from '../../Hooks/useRequestData';
import CardPostDetail from '../../Components/CardPostDetail/CardPostDetail'
import { Principal } from './PostStyle'
import { Button, TextField } from '@material-ui/core';
import useForm from '../../Hooks/useForm';
import {createComment} from '../../Service/useRequestPost'
import { BASE_URL } from '../../Constants/Urls';


const Post = () => {
    useProtectedPage();

    const { id } = useParams();
    const getDetail = useRequestData({},`${BASE_URL}/posts/${id}`)


    const initialState = {
        "text": ""
    }
    const [form, handleInputChange, clear] = useForm(initialState)

    const onSubmitForm = (e) => {
        e.preventDefault();
        createComment(form,id,clear)
    }


    const commentsScreen = getDetail.post && getDetail.post.comments.length > 0 && getDetail.post.comments.map((comments) => {
        return (
            <div key={comments.username}>
                <p>Autor: {comments.username}</p>
                <p>{comments.text}</p>
            </div>
        )
    })



    return (
        <Principal>
           { getDetail.post && <CardPostDetail
                username={getDetail.post.username}
                text={getDetail.post.text}
                votesCount={getDetail.post.votesCount}
                commentsCount={getDetail.post.commentsCount}
            />}
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
                    Enviar Comentario
                        </Button>
            </form>
            <div>{commentsScreen && commentsScreen.length > 0 ? commentsScreen : <p>Sem comentários</p>}</div>
        </Principal>
    )
}
export default Post;