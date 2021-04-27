import React from 'react'
import useProtectedPage from '../../Hooks/useProtectedPage';

const Post = () =>{
    useProtectedPage()
    return(
        <h1>Post</h1>
    )
}
export default Post;