import React, { useState,useEffect } from "react";
import { Header, Titulo, HeaderButton, Main, ImagemCard, Card, ButtonCard, Button } from "../Styled/StyledHome";
import { useHistory } from "react-router-dom";
import { BASE_URL } from "../url/Base_url";
import axios from "axios";


function  Home () {
    
    const [pokemon, setPokemon] = useState([])
    const [details, setDetails] = useState([])


    const history = useHistory()

    const goToPokedex = () => {
        history.push("/Pokedex")
    }

    const goToDetails = () => {
        history.push("/DetalhePokemon")
    }
 
    useEffect(() => {
      
    getPokemon()

    }, []);

    
    const getPokemon = async () => {
        try {
        const response = await axios.get(`${BASE_URL}/pokemon/?offset=20&limit=20"`)
        setPokemon(response.data.results)
     
       }
       catch (error) {
           alert("Algo deu errado")
       }
    }

    const detailsPokemon = async () => {
        try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon[0].name}`)
         
        setDetails(response)
        alert("to setando")
       }
       catch (error) {
           console.log(error)
           alert("deu errado", error)
       }
    }
    const listPokemon = pokemon
    .map((poke)=>{
        return (
        <Card key={poke.id}> 
            <h3>{poke.name}</h3>


        {poke.sprites && (
        <ImagemCard src={poke.sprites.front_default} alt={poke.name} />
        )}
        {poke.url}
         
            <ButtonCard>         
            <Button >Adicionar a Pokédex</Button>
            <Button onClick={detailsPokemon}> Ver detalhes</Button>
            </ButtonCard>
            </Card>
        )
    })

  return (
    <div>
        <Header> 
            <HeaderButton onClick={goToPokedex}>Ir para Pokedex</HeaderButton>
            <Titulo>Lista de Pokemons</Titulo>
        </Header>
    
        <Main>
            {listPokemon}
            {details.sprites && (
        <div src={details.sprites.front_default} alt={details.name} />
        )}
            
        </Main>
    </div>
  )
}

export default Home;