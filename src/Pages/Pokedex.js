import React, { useContext } from "react";
import { goToHome } from "../Router/coordinator";
import { Header, Titulo, HeaderButton, ContainerPokedex, PokeListContainer } from "../Styled/StyledPokedex";
import { useNavigate } from "react-router-dom"
import GlobalStateContext from "../Context/GlobalStateContext";
import PokemonCard from "../Components/PokeCard/PokemonCard";

const Pokedex = () => {
  const { pokedex } = useContext(GlobalStateContext);
  const navigation = useNavigate();

  return (
    <>
     <Header> 
        <HeaderButton onClick={() => goToHome(navigation)}>Voltar para lista de Pokemons</HeaderButton>
        <Titulo>Pokédex</Titulo>
       </Header>
      <PokeListContainer>
        {pokedex &&
          pokedex.map((poke) => {
            return <PokemonCard isPokedex key={poke.name} poke={poke} />;
          })}
      </PokeListContainer>
    </>
  );
};

export default Pokedex;
