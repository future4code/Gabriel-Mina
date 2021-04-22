import React from 'react'
import { useHistory } from 'react-router';
import { Container, ListagemViagem, ExplorePlanetas, TituloContainer, Planetas, PlanetasFilho, ImagemPlaneta, Inspiracoes, PlanetasFilhoInspiracoes, ImagemPlanetaViagens, Paragrafo } from './Style'
import Button from '@material-ui/core/Button';
import marte from '../../img/marte.jpg'
import plutao from '../../img/plutao.jpg'
import terra from '../../img/terra.jpg'
import venus from '../../img/venus.jpg'
import curiosidadesmarte from '../../img/curiosidadesmarte.png'
import plutaoplaneta from '../../img/plutaoplaneta.jpg'
import curiosidadesterra from '../../img/curiosidadesterra.png'
import estreladalva from '../../img/estreladalva.jpg'


export default function HomePage() {

    const history = useHistory();

    const goToTripList = () => {
        history.push("/trip/list")
    }
     
    const goToAdmin = () => {
        history.push("/login")
    }
    
    return (
        <>
            <Container>
                <ListagemViagem>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        onClick={goToTripList}
                    >Ver todas as viagens</Button>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        onClick={goToAdmin}
                    >àrea do admin</Button>
                </ListagemViagem>
                <ExplorePlanetas>
                    <TituloContainer>Explore alguns planetas</TituloContainer>
                    <Planetas>
                        <PlanetasFilho>
                            <ImagemPlaneta src={marte} />
                        </PlanetasFilho>
                        <PlanetasFilho>
                            <ImagemPlaneta src={plutao} />
                        </PlanetasFilho>
                        <PlanetasFilho>
                            <ImagemPlaneta src={terra} />
                        </PlanetasFilho>
                        <PlanetasFilho>
                            <ImagemPlaneta src={venus} />
                        </PlanetasFilho>
                    </Planetas>
                </ExplorePlanetas>
                <Inspiracoes>
                    <TituloContainer>Inspirações para próximas viagens</TituloContainer>
                    <Planetas>
                        <PlanetasFilhoInspiracoes>
                            <ImagemPlanetaViagens src={curiosidadesmarte} />
                            <Paragrafo>Batizado em homenagem ao deus romano da guerra, conhecido como "Planeta Vermelho"</Paragrafo>
                        </PlanetasFilhoInspiracoes>
                        <PlanetasFilhoInspiracoes>
                            <ImagemPlanetaViagens src={plutaoplaneta} />
                            <Paragrafo>Plutão é o nome do deus romano do submundo.</Paragrafo>
                        </PlanetasFilhoInspiracoes>
                        <PlanetasFilhoInspiracoes>
                            <ImagemPlanetaViagens src={curiosidadesterra} />
                            <Paragrafo>A Terra é o quinto maior planeta do Sistema Solar</Paragrafo>
                        </PlanetasFilhoInspiracoes>
                        <PlanetasFilhoInspiracoes>
                            <ImagemPlanetaViagens src={estreladalva} />
                            <Paragrafo>Ele é considerado o planeta gêmeo da Terra.</Paragrafo>
                        </PlanetasFilhoInspiracoes>
                    </Planetas>
                </Inspiracoes>
            </Container>
        </>
    );
}