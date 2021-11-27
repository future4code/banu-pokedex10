import React, { useState,useEffect } from "react";
import { Header, Titulo, HeaderButton, Main, ImagemCard, Card, ButtonCard, Button } from "../Styled/StyledHome";
import { useHistory } from "react-router-dom";
import { BASE_URL } from "../url/Base_url";
import axios from "axios";
import { useContext } from "react";



function  Home () {
    
    const [pokemon, setPokemon] = useState([])
    const [details, setDetails] = useState([])
    const [idPokemon, setIdPokemon] = useState([])

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

    useEffect(() => {
   
        const dataPokemons = []
    const listarPoke = pokemon&&pokemon
    .map((item) => {
        axios.get(item.url)
        .then((response)=>{
            dataPokemons.push(response.data)
            if(dataPokemons.length === 20){
                setDetails(dataPokemons)
            }
        })
        .catch((error)=>{
            alert(error)
        })
    })
        }, [pokemon]);

    

    const getPokemon = async () => {
        try {
        const response = await axios.get(`${BASE_URL}/pokemon/?offset=20&limit=20"`)
        setPokemon(response.data.results)
     
       }
       catch (error) {
           alert("Algo deu errado")
       }
    }


    const addPokedex = (newItem) => {
        const index = pokemon.findIndex((i) => i.id === newItem.id);
        let newList = [...pokemon];
        if (index === -1) {
          newList.push({ ...newItem, amount: 1 });
        } else {
          newList[index].amount += 1;
        }
        console.log(newList)
        setIdPokemon(newList);
        alert(`${newItem.name} foi adicionado ao seu carrinho!`);
      };

    const listarPokemon = details
    .map((poke)=>{
        return <div key={poke.id}> 
            <h3>{poke.name}</h3>
        {poke.sprites && (
        <ImagemCard src={poke.sprites.front_default} alt={poke.name} />
        )}
        {poke.url}
      
         <ButtonCard>      
            <Button onClick={addPokedex} >Adicionar a Pokédex</Button>
            <Button> Ver detalhes</Button>
            </ButtonCard>
            </div>
       
        
    })
  return (
    <div>
        <Header> 
            <HeaderButton onClick={goToPokedex}>Ir para Pokedex</HeaderButton>
            <Titulo>Lista de Pokemons</Titulo>
        </Header>
    
        <Main>
        {listarPokemon}
          
        </Main>
    </div>
  )
}

export default Home;