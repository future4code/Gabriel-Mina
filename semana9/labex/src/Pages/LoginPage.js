import React, { useState } from 'react'
import { useHistory } from 'react-router';
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import viagem from '../img/viagem.jpg'
import axios from 'axios';
import UrlBase from '../Constants/Constants'


const Conteudo = styled.div`
    display:flex;
    flex:2;
    min-height:100px;
    margin:10px;
    `

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: `url(${viagem})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));



export default function LoginPage() {
    const classes = useStyles();
    const history = useHistory();

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const goTohome = () => {
        history.push("/")
    }

    const inputName = (e) => {
        setName(e.target.value);
    }
    const inputPassword = (e) => {
        setPassword(e.target.value)
    }

    const login = async () => {
        const body = {
            "email": name,
            "password": password
        }

        try {
            const response = await axios.post(`${UrlBase}gabriel-mina-cruz/login`, body);
            window.localStorage.setItem("token",response.data.token)
            history.push("/admin/trips/list")
        } catch (erro) {
            alert("Email ou senha incorretos!")
        }
    }

    return (
        <Conteudo>
            <Grid container component="main" className={classes.root}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7} className={classes.image} />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                       </Typography>
                        <form className={classes.form} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus                        
                                value={name}
                                onChange={inputName}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
    
                                value={password}
                                onChange={inputPassword}
                            />

                            <Button variant="outlined" onClick={login}>
                                Entrar
                            </Button>
                            <Button
                                variant="outlined"
                                onClick={goTohome}
                            >
                                voltar
                            </Button>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </Conteudo>
    );
}