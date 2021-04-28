import styled from 'styled-components'


export const Posts = styled.div`
    width:30vw;
    height:25vh;
    display:flex;
    flex-direction:column;
    margin:10px 0 ;
    @media(max-width:800px){
        width:80vw;
        display:flex;
        justify-content:center;
        margin:20px;
    }

`
export const Form = styled.form`
    display:flex;
    flex:1;
    border:1px solid black;
    flex-direction:column;
    justify-content:space-between;
`
