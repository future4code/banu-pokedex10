import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Pokedex from '../Pages/Pokedex';
import DetalhePokemon from '../Pages/DetalhePokemon';

export const Router = () =>  {    

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="pokedex" element={<Pokedex/>} /> 
            <Route path="/detalhepokemon" element={<DetalhePokemon/>}> 
            </Route>
        </Routes>         
    </BrowserRouter>
  );
}



