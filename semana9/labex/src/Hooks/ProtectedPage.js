import React,{useEffect} from 'react'
import { useHistory } from 'react-router'



export const ProtectedPage = () =>{
    const history = useHistory();
    
    useEffect(()=>{
        const token  = window.localStorage.getItem("token");
        if(!token){
            history.push("/login")
        }    
    },[history])
}
