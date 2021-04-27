import React from 'react'
import { ScreenContainer, LogoImagem} from './LoginStyle'
import logo from '../../Assets/reddit.jpg'
import LoginForm from './LoginForm';
import useUnProtectedPage from '../../Hooks/useUnProtectedPage';

const Login = () => {
    useUnProtectedPage()
    return (
        <ScreenContainer>
            <LogoImagem src={logo} />
            <LoginForm />
        </ScreenContainer>
    )
}
export default Login;