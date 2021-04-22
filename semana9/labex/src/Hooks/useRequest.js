import {useState,useEffect} from 'react'
import UrlBase from '../Constants/Constants';
import axios from 'axios'


const useRequest = (endpoint,inicialState) =>{
    const [data,setData] = useState(inicialState);

    const getData = () =>{
        axios.get(`${UrlBase}${endpoint}`,{
            headers:{
                auth:localStorage.getItem("token")
            }
        }).then((response)=>{
            setData(response.data);
        }).catch((erro)=>{
            alert(erro.response.data.message);
        })
    }

    useEffect(()=>{
        getData();
    },[endpoint])

    return[data,getData]
}

export default useRequest;

