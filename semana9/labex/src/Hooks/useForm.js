import { useState } from "react"

export const useForm = (initialForm) =>{

    const [form,setForm] = useState(initialForm);

    const onchange = (e) =>{
        // desestruturando o event.target
        const {name,value} = e.target;
        setForm({ ...form, [name]:value });
    }

    return[form,onchange];
}