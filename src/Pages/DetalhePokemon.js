import React from "react";
import { Header, ButtonHeader, Titulo, Main, ImagemCard } from "../Styled/StyledDetalheDoPokemon";
import { useHistory } from "react-router-dom"

function DetalhePokemon () {
    
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const goToPokedex = () => {
        history.push("/Pokedex")
    }
 
  return (
    <div>
        <Header>
            <ButtonHeader onClick={goBack}> Voltar </ButtonHeader>
            <Titulo>Detalhe do Pokemon</Titulo>
            <ButtonHeader onClick={goToPokedex}> Ir para Pokédex </ButtonHeader>
        </Header> 
        <Main>
            <ImagemCard>
                <img src='https://picsum.photos/200/150' alt="Imagem "/>
                <img src='https://picsum.photos/200/150' alt="Imagem "/>
            </ImagemCard>
            <div>
                <p>Poderes</p>
            </div>
            <div>
                <p>Tipo e principais ataques</p>
            </div>

        </Main>      
    </div>
  )
}

export default DetalhePokemon;