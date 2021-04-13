import styled from 'styled-components'

const Principal = styled.div`
    display:flex;
    flex:1;
    flex-direction:column;
    background-color:#000000;
    color:#ffffff;
`
const ItensFooter = styled.div`
    width:200px;
    display:flex;
    text-align:center;
    flex-direction:column;
`
const TituloItensFooter = styled.h2`
    text-transform:uppercase;
`
const ItensPrincipalFooter = styled.div`
    display:flex;
    justify-content:space-around;
    border-bottom: 1px solid #ffffff;
`
const RedesSociais = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`
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
                <p>Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium</p>
                <p>LABEX</p>
                <p>RedesSociais</p>
                <p>&copy; Todos os direitos autorais para Labex- LTDA</p>
            </RedesSociais>
        </Principal>
    )
}