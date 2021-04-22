import styled from 'styled-components';
import logo from '../img/x.png';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
/*
@media (max-width: 800px) {
    flex-wrap: wrap;
    justify-content: center;
  }
*/
const Principal = styled.div`
    display:flex;
    flex:1;
    align-items:center;
    background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #000000;
    color:#ffffff;
    justify-content:space-between;
`
const Logo = styled.div`
    display:flex;
    align-items:center;
    margin-left:4px;
    font-size:50px;
`
const ImagemLogo = styled.img`
    height:100px;
    background-color:#ffffff;
    border:2px solid black;
`
const IconeAdmin = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    font-size:20px;
    margin: 0 30px;
`

export default function Header() {
   
        
    return (
        <Principal>
            <Logo>
                <ImagemLogo src={logo} />
                <h2>LABEX</h2>
            </Logo>
            <IconeAdmin>
                <ContactPhoneIcon style={{ fontSize: 60 }}/>
                Central de atendimento: (99) 9999-9999
            </IconeAdmin>
        </Principal>
    )
}