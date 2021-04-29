import styled from 'styled-components'
import {TextField } from '@material-ui/core';


export const Principal = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
        @media(max-width:800px){
            width:80vw;
            display:flex;
            justify-content:center;
            margin:50px;
        }
`
export const TextFieldStyle = styled(TextField)`
    width:50vw;
    @media(max-width:800px){
            width:80vw;
            display:flex;
            justify-content:center;
        }
`
