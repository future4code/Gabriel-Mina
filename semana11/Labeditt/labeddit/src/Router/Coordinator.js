export const goToHomePage = (history) =>{
    history.push("/")    
}

export const goToFeed = (history) =>{
    history.push("/Feed")    
}

export const goToPost = (history,id) =>{
    history.push(`/Post/${id}`)    
}

export const goToSingUp = (history) =>{
    history.push("/cadastrar")    
}