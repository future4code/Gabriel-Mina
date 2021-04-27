import React from 'react'
import { ScreenContainer, LogoImagem} from './SingUpStyle'
import logo from '../../Assets/reditSignUp.jpg'
import SingUpForm from './SingUpForm'
import useUnProtectedPage from '../../Hooks/useUnProtectedPage';

const SingUp = () => {
    useUnProtectedPage();
    return (
        <ScreenContainer>
            <LogoImagem src={logo} />
            <SingUpForm />
        </ScreenContainer>
    )
}
export default SingUp;