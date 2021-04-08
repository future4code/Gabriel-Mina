import {HeaderAstro, HeaderAstroFilho} from './style';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GroupIcon from '@material-ui/icons/Group';
export default function Header(props){
    return(
        <HeaderAstro>
          <HeaderAstroFilho>
            <h2>AstroMatch <WhatshotIcon /></h2>
            <GroupIcon style={{ fontSize: 70,cursor: "pointer" }} onClick={props.teste}>Matches</GroupIcon>
          </HeaderAstroFilho>
        </HeaderAstro>
    )
}