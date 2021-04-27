import { useLayoutEffect } from 'react'
import {useHistory} from 'react-router-dom'
import {goToHomePage} from '../Router/Coordinator'

// o UseLayoutEffect primeiro faz a verificação da condicao e depois renderiza o effect

const useProtectedPage = () =>{
    const history = useHistory()

    useLayoutEffect(()=>{
        const token = localStorage.getItem("token")
        if(!token){
            goToHomePage(history)
        }
    },[history])
}

export default useProtectedPage