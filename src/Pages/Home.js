import React from "react";
import { Header, Titulo, HeaderButton, Main, ImagemCard, Card, ButtonCard, Button } from "../Styled/StyledHome";
import { useHistory } from "react-router-dom"


function  Home () {

    const history = useHistory()

    const goToPokedex = () => {
        history.push("/Pokedex")
    }

    const goToDetails = () => {
        history.push("/DetalhePokemon")
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
                    <Button>Adicionar a Pokédex</Button>
                    <Button onClick={goToDetails}> Ver detalhes</Button>
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