import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { Home } from './pages/Home';


function App(props) {
const [pokemon, setPokemon] = useState()

function fetchPokemon() {
  fetch(`https://pokeapi.co/api/v2/pokemon/${2}`)
  .then(response => response.json())
  .then(data => setPokemon(data))
}
  useEffect(fetchPokemon, [])


console.log(pokemon)



  return (
    <div className="App" >
      <img src={pokemon.sprites.front_default}></img>
      {fetchPokemon}
      <p>{pokemon.name}, height = {pokemon.height} </p>
     <Home /> 
    </div>
  );
}

export default App;

