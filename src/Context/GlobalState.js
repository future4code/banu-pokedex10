import axios from "axios";
import React, { useState, useEffect } from "react";
import { BASE_URL } from "../Constants/url";
import GlobalStateContext from "./GlobalStateContext";


const GlobalState = (props) => {
    const [pokemons, setPokemons] = useState([]);
    const [details, setDetails] = useState([]);
    const [pokedex, setPokedex] = useState([]);
  
    useEffect(() => {
      getPokemon();
    }, []);
  

    useEffect(() => {
    const dataPokemons = []
    const listarPoke = pokemons&&pokemons
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
      }, [pokemons]);

    const getPokemon = async () => {
      try {
      const response = await axios.get(`${BASE_URL}/pokemon/?offset=20&limit=20"`)
      setPokemons(response.data.results)
   
     }
     catch (error) {
         alert("Algo deu errado")
     }
  }
  
    const data = {
      details,
      setDetails,
      pokedex,
      setPokedex
    };
  
    return (
      <GlobalStateContext.Provider value={data}>
        {props.children}
      </GlobalStateContext.Provider>
    );
  };
  
  export default GlobalState;

















// const GlobalState = (props) => {
//     const [pokedex, setPokedex] = useState([]);
//     const [pokemon, setPokemon] = useState([]);
//     const [details, setDetails] = useState([]);

//     // const navigation = useNavigate()
 
//     useEffect(() => {
//         const dataPokemons = []
//     pokemon&&pokemon
//     .forEach((item) => {
//         axios.get(item.url)
//         .then((response)=>{
//             dataPokemons.push(response.data)
//             if(dataPokemons.length === 20){
//                 setDetails(dataPokemons)
//             }
//         })
//         .catch((error)=>{
//             alert(error)
//         })
//     })
//         }, [pokemon]); 


//         useEffect(() => {
//             getPokemon()
//             }, []);
            
        
//             const getPokemon = async () => {
//                 try {
//                 const response = await axios.get(`${BASE_URL}/pokemon/?offset=20&limit=20"`)
//                 setPokemon(response.data.results)
             
//                }
//                catch (error) {
//                    alert("Algo deu errado")
//                }
//             }

//     const data = {
//         pokedex,
//         setPokedex,
//         pokemon,
//         setPokemon,
//         details,
//         setDetails
//     };


//     return (
//         <GlobalStateContext.Provider value={{ data }}>
//             {props.children}
//         </GlobalStateContext.Provider>
//     )
// }

// export default GlobalState;


// const [pokemonNames, setPokemonNames] = useState([]);
// const [pokemons, setPokemons] = useState([]);
// const [pokedex, setPokedex] = useState([]);

// useEffect(() => {
//   getPokemonNames();
// }, []);

// useEffect(() => {
//   const newList = [];
//   pokemonNames.forEach((item) => {
//     axios
//       .get(`${BASE_URL}/pokemon/${item.name}`)
//       .then((response) => {
//         newList.push(response.data);
//         if (newList.length === 20) {
//         //   const orderedList = newList.sort((a, b) => {
//         //     return a.id - b.id;
//         //   });
//           setPokemons(newList);
//         }
//       })
//       .catch((error) => console.log(error.message));
//   });
// }, [pokemonNames]);


//      useEffect(() => {
//             const newList = []
//      pokemonNames
//         .forEach((item) => {
//             axios.get(item.url)
//             .then((response)=>{
//                 newList.push(response.data)
//                 if(newList.length === 20){
//                     setPokemonNames(newList)
//                 }
//             })
//             .catch((error)=>{
//                 // alert(error)
//             })
//         })
//             }, [pokemonNames]); 



// const getPokemonNames = () => {
//   axios
//     .get(`${BASE_URL}/pokemon?limit=20`)
//     .then((response) => {
//       setPokemonNames(response.data.results);
//     })
//     .catch((error) => console.log(error.message));
// };

// const data = {
//   pokemons,
//   setPokemons,
//   pokedex,
//   setPokedex
// };

// return (
//   <GlobalStateContext.Provider value={data}>
//     {props.children}
//   </GlobalStateContext.Provider>
// );
// };

// export default GlobalState;




