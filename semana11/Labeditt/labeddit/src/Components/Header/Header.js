import React, { useContext} from 'react';
import AppBar from '@material-ui/core/AppBar';
import { StyledTooBar} from './Styled'
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import {goToSingUp,goToHomePage} from '../../Router/Coordinator'
import {useHistory} from 'react-router-dom'
import {GlobalStateContext} from '../../Global/GlobalStateContext'


const Header = () =>{

    const history = useHistory();
    const {states,setters} = useContext(GlobalStateContext)

    const token = localStorage.getItem("token");
    
    const actionButton = () =>{
        if(token){
            localStorage.removeItem("token");
            setters.setLogado("Cadastrar");
            goToSingUp(history)
        }else{
            goToSingUp(history)
        }
    }

    return (
        <AppBar position="static">
            <StyledTooBar>
                <Button color="inherit" onClick={()=>goToHomePage(history)}>LabEddit</Button>
                    <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-haspopup="true"
                        color="inherit"
                        onClick={actionButton}
                    >
                      <AccountCircle/>{states.logado}
                    </IconButton>
            </StyledTooBar>
        </AppBar>
    );
}
export default Header;
