import React from 'react'
import { ScreenContainer, LogoImagem} from './LoginStyle'
import logo from '../../Assets/reddit.jpg'
import LoginForm from './LoginForm';

const Login = () => {
    return (
        <ScreenContainer>
            <LogoImagem src={logo} />
            <LoginForm />
        </ScreenContainer>
    )
}
export default Login;