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

export const ButtonHeader = styled.button`
   margin-top: 15px;
   margin-left: 20px;
   margin-right: 10px;
   height: 50%;
   padding: 8px;
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

export const PokeInfosContainer = styled.main`
  height: 80vh;
  margin: 20px 10vw;
  display: flex;
  justify-content: space-evenly;
`;

export const ImagesContainer = styled.div`
  align-self: center;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ImgWrapper = styled.img`
  height: 25vh;
`;

export const StatsContainer = styled.div`
  align-self: center;
  height: 75%;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 20px;
`;

export const TitleContainer = styled.h2`
  align-self: center;
`;

export const TypeAndMovesContainer = styled.div`
  align-self: center;
  height: 75%;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TypesContainer = styled.div`
  height: 10%;
  display: flex;
  justify-content: space-around;
`;

export const MovesContainer = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 20px;
`;

export const HeaderButton = styled.button`
    position: absolute;
    left: 20px;
    padding: 8px;
    border-radius: 4px;
`