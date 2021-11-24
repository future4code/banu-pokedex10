import React, { useState } from "react";
import { Header, Titulo, HeaderButton, Main, ImagemCard, Card, ButtonCard, Button } from "../Styled/StyledHome";
import { useHistory } from "react-router-dom";
import { BASE_URL } from "../url/Base_url";
import axios from "axios";


function  Home () {
    
    const [pokemon, setPokemon] = useState([])
    const [urls, setUrls] = useState([])

    const history = useHistory()

    const goToPokedex = () => {
        history.push("/Pokedex")
    }

    const goToDetails = () => {
        history.push("/DetalhePokemon")
    }
 
    
    const getPokemon = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/pokemon/?offset=20&limit=20"`)
        setPokemon(response.data.results)
       console.log(pokemon)
       }
       catch (error) {
           alert("Algo deu errado")
       }
    }


    const detailsPokemon = async () => {
        try {
            const response = await axios.get(urls)
        // setPokemon(response.data.results)
       console.log(response)
       }
       catch (error) {
           alert("deu errado")
       }
    }

    const Estado = () => {
        pokemon.forEach(item => {
            setUrls(item.url)
            console.log(urls) 
        })
    }



   

  return (
    <div>
        <Header> 
            <HeaderButton onClick={goToPokedex}>Ir para Pokedex</HeaderButton>
            <Titulo>Lista de Pokemons</Titulo>
        </Header>
        <Main>
            <Card>
                
                <ImagemCard src='https://picsum.photos/200/150' alt="Imagem "/>
                <ButtonCard>
                    
                    <Button onClick={Estado} >Adicionar a Pokédex</Button>
                    <Button onClick={getPokemon} > Ver detalhes</Button>
                </ButtonCard>
            </Card>
            <Card>
                <ImagemCard src='https://picsum.photos/200/150' alt="Imagem "/>
                <ButtonCard>
                    <Button onClick={detailsPokemon}>Adicionar a Pokédex</Button>
                    <Button onClick={goToDetails}>Ver detalhes</Button>
                </ButtonCard>    
            </Card>
            <Card>
                <ImagemCard src='https://picsum.photos/200/150' alt="Imagem "/>
                <ButtonCard>
                    <Button>Adicionar a Pokédex</Button>
                    <Button onClick={goToDetails}>Ver detalhes</Button>
                </ButtonCard>    
            </Card>
            <Card>
                <ImagemCard src='https://picsum.photos/200/150' alt="Imagem "/>
                <ButtonCard>
                    <Button>Adicionar a Pokédex</Button>
                    <Button onClick={goToDetails}>Ver detalhes</Button>
                </ButtonCard>
            </Card>
            <Card>
                <ImagemCard src='https://picsum.photos/200/150' alt="Imagem "/>
                <ButtonCard>
                    <Button>Adicionar a Pokédex</Button>
                    <Button onClick={goToDetails}>Ver detalhes</Button>
                </ButtonCard>
            </Card>
            <Card>
                <ImagemCard src='https://picsum.photos/200/150' alt="Imagem "/>
                <ButtonCard>
                    <Button>Adicionar a Pokédex</Button>
                    <Button onClick={goToDetails}>Ver detalhes</Button>
                </ButtonCard>
            </Card>
            <Card>
                <ImagemCard src='https://picsum.photos/200/150' alt="Imagem "/>
                <ButtonCard>
                    <Button>Adicionar a Pokédex</Button>
                    <Button onClick={goToDetails}>Ver detalhes</Button>
                </ButtonCard>
            </Card>
            <Card>
                <ImagemCard src='https://picsum.photos/200/150' alt="Imagem "/>
                <ButtonCard>
                    <Button>Adicionar a Pokédex</Button>
                    <Button onClick={goToDetails}>Ver detalhes</Button>
                </ButtonCard>
            </Card>
            <Card>
                <ImagemCard src='https://picsum.photos/200/150' alt="Imagem "/>
                <ButtonCard>
                    <Button>Adicionar a Pokédex</Button>
                    <Button onClick={goToDetails}>Ver detalhes</Button>
                </ButtonCard>
            </Card>
            <Card>
                <ImagemCard src='https://picsum.photos/200/150' alt="Imagem "/>
                <ButtonCard>
                    <Button>Adicionar a Pokédex</Button>
                    <Button onClick={goToDetails}>Ver detalhes</Button>
                </ButtonCard>
            </Card>
            
        </Main>
    </div>
  )
}

export default Home;