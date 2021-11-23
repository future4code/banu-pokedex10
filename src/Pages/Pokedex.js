import React from "react";
import { Header, Titulo, HeaderButton } from "../Styled/StyledPokedex";
import { useHistory } from "react-router-dom"

function Pokedex ()  {

    const hisrtory = useHistory()

    const goToHome = () => {
        hisrtory.push("/")
    }
 
  return (
    <div>
        <Header> 
            <HeaderButton onClick={goToHome}>Voltar para lista de Pokemons</HeaderButton>
            <Titulo>Pokédex</Titulo>
        </Header>
        
    </div>
  )
}

export default Pokedex;