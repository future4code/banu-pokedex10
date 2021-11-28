import styled from "styled-components";

export const Header = styled.div`
    height: 8vh;
    background: rgb(48, 167, 215);
    display: flex;
    justify-content: space-between;
    color: white;
    position: relative;
    margin: -8px;
    padding: 10px;
`

export const HeaderButton = styled.button`
    position: absolute;
    left: 20px;
    padding: 10px;
    border-radius: 4px;
`

export const Titulo = styled.h1`
   margin-top: 5px;
` 

export const Main = styled.div`
   height: 80vh;
   margin: 20px 10vw;
   display: flex;
   justify-content: space-evenly;
`

export const ImagemCard = styled.div`
   display: flex;
   justify-content: space-evenly;
   flex-direction: column;
`
