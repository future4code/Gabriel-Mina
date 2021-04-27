import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { StyledTooBar, StyedSearch} from './Styled'
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import {goToSingUp,goToHomePage} from '../../Router/Coordinator'
import {useHistory} from 'react-router-dom'

const Header = () =>{

    const history = useHistory();

    const token = localStorage.getItem("token")
    const [logado,setLogado] =useState(token ? "Logout" :"Cadastrar")

    return (
        <AppBar position="static">
            <StyledTooBar>
                <Button color="inherit" onClick={()=>goToHomePage(history)}>LabEddit</Button>
                <StyedSearch >
                    <InputBase
                        placeholder="Buscar Feed"
                    />
                </StyedSearch>
                    <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-haspopup="true"
                        color="inherit"
                        onClick={()=> goToSingUp(history)}
                    >
                      {logado}
                    </IconButton>
            </StyledTooBar>
        </AppBar>
    );
}
export default Header;