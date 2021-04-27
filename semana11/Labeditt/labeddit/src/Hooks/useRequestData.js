import {useEffect,useState} from 'react'
import axios from 'axios'

const useRequestData = (initialData,url) =>{
    const [data,setData] = useState(initialData)
    
    const getPosts = async() =>{
        try{
            const response = await axios.get(url,{
                headers:{
                    Authorization: localStorage.getItem("token")
                }
            })
            setData(response.data.posts)
        }catch(erro){
            console.log(erro.response.data.message)
        }
    }

    useEffect(()=>{
        getPosts();
    },[])

    return data;
}
export default useRequestData