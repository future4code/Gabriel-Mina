import styled from 'styled-components'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import { Principal ,ItensFooter, TituloItensFooter , ItensPrincipalFooter , RedesSociais , RedesSociaisIcones} from './styled';

export default function Footer() {
    return (
        <Principal>
            <ItensPrincipalFooter>
                <ItensFooter>
                    <TituloItensFooter>Sobre</TituloItensFooter>
                    <h4>Como Funciona</h4>
                    <h4>Investidores</h4>
                    <h4>Carreiras</h4>
                </ItensFooter>
                <ItensFooter>
                    <TituloItensFooter>Hospedagem</TituloItensFooter>
                    <h4>Lugares para ficar</h4>
                    <h4>Todos os Destinos</h4>
                    <h4>Avaliações</h4>
                </ItensFooter>
                <ItensFooter>
                    <TituloItensFooter>Região</TituloItensFooter>
                    <h4>Plutão</h4>
                    <h4>Vênus</h4>
                    <h4>Marte</h4>
                </ItensFooter>
                <ItensFooter>
                    <TituloItensFooter>Atendimento</TituloItensFooter>
                    <h4>Central de Ajuda</h4>
                    <h4>Canal de apoio</h4>
                    <h4>Opção de Cancelamento</h4>
                </ItensFooter>
            </ItensPrincipalFooter>
            <RedesSociais>
                <p>Labex Terra -  Operadora e Agência de Viagens Interplanetárias S.A - CNPJ: 99.999.999/0001-19 - Rua dos bobos, 0 | Planeta terra - CEP : 09080-370 </p>
                <p>LABEX</p>
                <RedesSociaisIcones>
                    <FacebookIcon />
                    <TwitterIcon />
                    <InstagramIcon />
                    <EmailIcon />
                    <PhoneIcon />
                </RedesSociaisIcones>
                <p>&copy; Todos os direitos autorais para Labex- LTDA</p>
            </RedesSociais>
        </Principal>
    )
}