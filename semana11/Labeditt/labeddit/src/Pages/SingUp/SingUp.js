import React from 'react'
import { ScreenContainer, LogoImagem} from './SingUpStyle'
import logo from '../../Assets/reditSignUp.jpg'
import SingUpForm from './SingUpForm'


const SingUp = () => {
    return (
        <ScreenContainer>
            <LogoImagem src={logo} />
            <SingUpForm />
        </ScreenContainer>
    )
}
export default SingUp;