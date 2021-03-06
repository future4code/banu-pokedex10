import React, { useContext, useState, useEffect } from "react";
import { Header, ButtonHeader, Titulo, PokeInfosContainer } from "../Styled/StyledDetalheDoPokemon";
import { useNavigate } from "react-router-dom"
import { goToHome } from "../Router/coordinator";
import { goToPokedex } from "../Router/coordinator"
import GlobalStateContext from "../Context/GlobalStateContext";


const DetalhePokemon = () => {
  const navigation = useNavigate();
  const { pokemons, pokedex } = useContext(GlobalStateContext);
  const [selectedPokemon, setSelectedPokemon] = useState({});


  return (
    <div>
      <Header>
          <ButtonHeader onClick={() => goToPokedex(navigation)}> Voltar </ButtonHeader>
            <Titulo>Detalhe do Pokemon</Titulo>
          <ButtonHeader onClick={() => goToHome(navigation)}> Home </ButtonHeader>
      </Header> 
      {selectedPokemon && selectedPokemon.sprites && (
        <PokeInfosContainer>
        </PokeInfosContainer>
      )}
    </div>
  );
};

export default DetalhePokemon;
  
