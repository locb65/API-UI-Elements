import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { Home } from './pages/Home';


function App(props) {
const [pokemon, setPokemon] = useState()

function fetchPokemon() {
  fetch(`https://pokeapi.co/api/v2/pokemon/`)
  .then(response => response.json())
  .then(data => console.log(data))
}
  useEffect(fetchPokemon, [])

  




  return (
    <div className="App">
     <Home/>
    </div>
  );
}

export default App;

