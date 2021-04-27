import React from 'react'
import useProtectedPage from '../../Hooks/useProtectedPage';

const Feed = () =>{
    useProtectedPage()
    return(
        <h1>Feed</h1>
    )
}
export default Feed;