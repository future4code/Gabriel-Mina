import React from 'react'
import { Posts, Form } from './CardPostStyle'
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import useForm from '../../Hooks/useForm';
import { createPost } from '../../Service/useRequestPost'

const CardPost = () => {


    const initialState = {
        text: "",
        title: ""
    }

    const [form, handleInputChange, clear] = useForm(initialState)

    const onSubmitForm = (e) => {
        e.preventDefault();
        createPost(form, clear)
    }

    return (
        <Posts>
            <Form onSubmit={onSubmitForm}>
                <TextField
                    type={"text"}
                    label={"Titulo"}
                    variant={'outlined'}
                    fullWidth
                    name={"title"}
                    value={form.title}
                    onChange={handleInputChange}
                    margin={'normal'}

                />
                <TextField
                    type={"text"}
                    label={"Post"}
                    variant={'outlined'}
                    fullWidth
                    name={"text"}
                    value={form.text}
                    onChange={handleInputChange}
                    margin={'normal'}

                />

                <Button
                    type={"submit"}
                    variant="contained"
                    margin={'normal'}
                    color="primary"
                    fullWidth>
                    Postar
                </Button>
            </Form>
        </Posts>
    )
}

export default CardPost