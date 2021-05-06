import { useLayoutEffect } from 'react'
import {useHistory} from 'react-router-dom'
import {goToFeed} from '../Router/Coordinator'


const useUnProtectedPage = () =>{
    const history = useHistory()

    useLayoutEffect(()=>{
        const token = localStorage.getItem("token")
        if(token){
            goToFeed(history)
        }
    },[history])
}

export default useUnProtectedPage