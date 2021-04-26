import React from 'react'
import Button from '@material-ui/core/Button';
import { Inputs, Buttons } from './LoginStyle'
import useForm from '../../Hooks/useForm'
import { TextField } from '@material-ui/core';

const LoginForm = () => {

    const initialState = {
        email: "",
        password: ""
    }

    const [form, handleInputChange, clear] = useForm(initialState)

    const onSubmitForm = (e) => {
        e.preventDefault();
        console.log(form);
    }

    return (
        <Inputs>
            <form onSubmit={onSubmitForm}>
                <TextField
                    type={"email"}
                    label={"E-mail"}
                    variant={'outlined'}
                    fullWidth
                    name={"email"}
                    value={form.email}
                    onChange={handleInputChange}
                    margin={'normal'}
                    required
                />
                <TextField
                    type={"password"}
                    label={"Senha"}
                    variant={'outlined'}
                    fullWidth
                    name={"password"}
                    value={form.password}
                    onChange={handleInputChange}
                    margin={'normal'}
                    required
                />
                <Buttons>
                    <Button
                        variant="contained"
                        margin={'normal'}
                        color="primary"
                        onClick={clear}
                        fullWidth>
                        Limpar
                        </Button>
                    <Button
                        type={"submit"}
                        variant="contained"
                        margin={'normal'}
                        color="primary"
                        fullWidth>
                        Entrar
                        </Button>
                </Buttons>
            </form>
        </Inputs>
    )
}
export default LoginForm;