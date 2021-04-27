import { useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import {goToHomePage} from '../Router/Coordinator'

const useProtectedPage = () =>{
    const history = useHistory()

    useEffect(()=>{
        const token = localStorage.getItem("token")
        if(!token){
            goToHomePage(history)
        }
    },[history])
}

export default useProtectedPage