import React, { useContext } from "react";
import { ImgContainer, ButtonCard, Button, Main } from "./style";
import { useNavigate } from "react-router-dom";
import { goToDetails } from "../../Router/coordinator";
import GlobalStateContext from "../../Context/GlobalStateContext";
import { ImagemCard } from "../../Styled/StyledHome";

const PokemonCard = (props) => {
  const navigation = useNavigate();
  const { pokemons, setPokemons, pokedex, setPokedex, details, setDetails } = useContext(
    GlobalStateContext
  );

  const addToPokedex = () => {
    const pokeIndex = details.findIndex(
      (item) => item.name === props.poke.name
    );
    const newPokemonsList = [...details];
    newPokemonsList.splice(pokeIndex, 1);
    const orderedPokemons = newPokemonsList.sort((a, b) => {
      return a.id - b.id;
    });

    const newPokedexList = [...pokedex, props.poke];
    const orderedPokedex = newPokedexList.sort((a, b) => {
      return a.id - b.id;
    });

    setPokedex(orderedPokedex);
    setDetails(orderedPokemons);
  };

  const removeFromPokedex = () => {
    const pokeIndex = pokedex.findIndex(
      (item) => item.name === props.poke.name
    );

    const newPokedexList = [...pokedex];
    newPokedexList.splice(pokeIndex, 1);
    const orderedPokedex = newPokedexList.sort((a, b) => {
      return a.id - b.id;
    });

    const newPokemonsList = [...details, props.poke];
    const orderedPokemons = newPokemonsList.sort((a, b) => {
      return a.id - b.id;
    });

    setPokedex(orderedPokedex);
    setDetails(orderedPokemons);
  };

  return (
    <div>
      <ImgContainer>
        <ImagemCard
          src={props.poke && props.poke.sprites.front_default}
          alt={props.poke.name}
        />
      </ImgContainer>
      <ButtonCard>
                  <Button onClick={props.isPokedex ? removeFromPokedex : addToPokedex}>
            {props.isPokedex ? "Remover da Pokédex" : "Adicionar a Pokédex"} </Button>
                  <Button onClick={() => goToDetails(navigation)}> Ver detalhes</Button>
              </ButtonCard>
    </div>
  );
};


export default PokemonCard;