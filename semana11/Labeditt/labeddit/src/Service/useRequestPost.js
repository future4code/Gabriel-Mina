import axios from 'axios'
import {BASE_URL} from '../Constants/Urls'
import {goToHomePage,goToFeed} from '../Router/Coordinator'

export const login = async(body,history,setLogado) =>{
    try{
        const response = await axios.post(`${BASE_URL}/login`,body);
        localStorage.setItem("token",response.data.token)
        alert("Logado com sucesso")
        goToFeed(history)
        setLogado("Logout")
    }catch(erro){
        alert(erro.response.data.message)
    }
}

export const createLogin = async(body,history) =>{
    try{
        const response = await axios.post(`${BASE_URL}/signup`,body);
        alert("Conta criada com sucesso !")
        goToHomePage(history);
    }catch(erro){
        alert(erro.response.data.message)
    }
    
}