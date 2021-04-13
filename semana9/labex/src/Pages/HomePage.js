import React from 'react'
import { useHistory } from 'react-router';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import marte from '../img/marte.jpg'
import plutao from '../img/plutao.jpg'
import terra from '../img/terra.jpg'
import venus from '../img/venus.jpg'
import curiosidadesmarte from '../img/curiosidadesmarte.png'
import plutaoplaneta from '../img/plutaoplaneta.jpg'
import curiosidadesterra from '../img/curiosidadesterra.png'
import estreladalva from '../img/estreladalva.jpg'



const Container = styled.div`
    display:flex;
    flex-direction:column;
`
const TituloContainer = styled.h2`
    font-family:Apple Chancery, cursive;
    text-transform:uppercase;
    font-size:20px;
    display:flex;
    justify-content:flex-start;
    margin:0 10px;
`
const ListagemViagem = styled.div`
    margin: 10px 50px;
    width:90vw;
    min-height:50px;
    min-width:100px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`
const ExplorePlanetas = styled.div`
    margin: 10px 50px;
    width:90vw;
    min-height:100px;
    min-width:100px;
    background-color:#C4C4C4;
    justify-content:space-between;
`
const Inspiracoes = styled.div`
    margin: 10px 50px;
    width:90vw;
    min-height:100px;
    min-width:100px;
    background-color:#C4C4C4;
`

const ImagemPlaneta = styled.img`
    height:250px;
    width:300px;
    margin:10px;
    border:3px solid white;
`
const ImagemPlanetaViagens = styled.img`
    height:350px;
    width:340px;
    margin:10px;
    border:3px solid white;
`
const Planetas = styled.div`
    display:flex;
    min-height:100px;
    min-width:100px;
    align-items:center;
    justify-content:space-around;
`
const PlanetasFilho = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`
const PlanetasFilhoInspiracoes = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`
const Paragrafo = styled.p`
    font-weight:bold;
    font-size:20px;
    text-align:center;
`
export default function HomePage() {

    const history = useHistory();

    const goToTripList = () => {
        history.push("/trip/list")
    }

    const goToAdmin = () => {
        history.push("/login")
    }
    /*
                <div>
                    <button onClick={goToTripList}>Ver viagem</button>
                    <button onClick={goToAdmin}>Àrea do admin</button>
                </div>
    */
    return (
        <>
            <Container>
                <ListagemViagem>
                    <Button
                                type="submit"
                                variant="contained"
                                color="primary"                                
                                onClick={goToTripList}
                            >Ver viagem</Button>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"                                
                                onClick={goToAdmin}
                            >Àrea do admin</Button>
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