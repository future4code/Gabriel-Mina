import React, { useState } from "react";
import { GlobalStateContext } from "./GlobalStateContext";

const GlobalState = (props) =>{

    const token = localStorage.getItem("token");
    const [logado,setLogado] = useState(token ? "Logout" :"Cadastrar");

    const states = {logado};
    const setters = {setLogado};

    return(
        <GlobalStateContext.Provider value={{states,setters}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;