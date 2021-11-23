import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Pokedex from '../Pages/Pokedex';
import DetalhePokemon from '../Pages/DetalhePokemon';



export const Router = () =>  {



  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" > 
                <Home />
            </Route>
        
            <Route exact path="/Pokedex"> 
                <Pokedex />
            </Route>

            <Route exact path="/DetalhePokemon"> 
                <DetalhePokemon />
            </Route>
        </Switch>         
    </BrowserRouter>
  );
}



