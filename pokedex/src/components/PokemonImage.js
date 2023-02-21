import React from "react";
import { useEffect, useState } from "react";
import "./Pokemon.css"


export const PokemonImage = (props) => {

  return (
    <>
    <div className="PokemonContainer">
      <img className="PokemonCard" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg" alt=""/>
      <h2>Ivysaur</h2>
    </div>
    </>
  )
}
