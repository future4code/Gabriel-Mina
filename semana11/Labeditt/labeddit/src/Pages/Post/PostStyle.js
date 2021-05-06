import styled from 'styled-components'


export const Principal = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    min-height:100vh;
`
export const Comments = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    width:30vw;
    @media(max-width:800px){
        width:80vw;
        display:flex;
        justify-content:center;
    }
`