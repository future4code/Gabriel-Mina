import {useEffect,useState} from 'react'
import axios from 'axios'

const useRequestData = (initialData,url) =>{
    const [data,setData] = useState(initialData)
    
    const getData = async() =>{
        try{
            const response = await axios.get(url,{
                headers:{
                    Authorization: localStorage.getItem("token")
                }
            })
            setData(response.data)
        }catch(erro){
            console.log(erro.response.data.message)
        }
    }

    useEffect(()=>{
        getData();
    },[])

    return data;
}
export default useRequestData