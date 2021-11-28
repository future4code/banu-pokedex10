import React, { useContext } from "react";
import { Header, Titulo, HeaderButton, Main } from "../Styled/StyledHome";
import { useNavigate } from "react-router-dom";
import { goToPokedex } from "../Router/coordinator";

import GlobalStateContext from "../Context/GlobalStateContext";
import PokemonCard from "../Components/PokeCard/PokemonCard";


const PokemonListScreen = () => {
    const { pokemons } = useContext(GlobalStateContext);
    const navigation = useNavigate();
  
    return (
      <>
       <Header> 
            <HeaderButton onClick={() => goToPokedex(navigation)}>Ir para Pokedex</HeaderButton>
            <Titulo src={"https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo.png"}></Titulo>
        </Header>
        <Main>
          {pokemons &&
            pokemons.map((poke) => {
              return <PokemonCard key={poke.name} poke={poke} />;
            })}
        </Main>
      </>
    );
  };
  
  export default PokemonListScreen;
  
  