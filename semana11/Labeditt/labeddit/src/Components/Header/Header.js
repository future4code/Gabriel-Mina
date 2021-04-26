import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { StyledTooBar, StyedSearch} from './Styled'
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import {goToSingUp,goToHomePage} from '../../Router/Coordinator'
import {useHistory} from 'react-router-dom'

export default function PrimarySearchAppBar() {

    const history = useHistory();

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
                        onClick={()=> goToSingUp(history)}
                        color="inherit"
                    >
                        <AccountCircle />Login
                    </IconButton>
            </StyledTooBar>
        </AppBar>
    );
}
