import styled from "styled-components"

export const Header = styled.div`
    background-color: rgb(48, 167, 215);
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: -8px;
    padding: 10px;
`

export const Titulo = styled.img`
    color: cornsilk; 
    width: 230px;
    height: 70px;
`

export const HeaderButton = styled.button`
    position: absolute;
    left: 20px;
    padding: 8px;
    border-radius: 4px;
`

export const Main = styled.div`
    padding: 20px;
    height: 92vh;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    row-gap: 20px;
    column-gap: 20px;
`

export const Card = styled.div`
    background: rgb(247 244 244);
    width: 20vw;
    height: 31vh;
`

export const ImagemCard = styled.img`
    width: 80%;
    margin-left: 10%; 
`
export const ButtonCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 5px;
    border-radius: 4px;
`

export const PokeListContainer = styled.div``
