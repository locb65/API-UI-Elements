import React from "react";
import { useEffect, useState } from "react";
import "./Pokemon.css"


export const PokemonImage = ({pokemon, loading}) => {
  console.log(pokemon)

  return (
    <>
    {
      loading ? <h1> Loading... </h1>: pokemon.map((data)=>{
        return (
          <>
            <div className="PokemonContainer">
              <h2>{data.id}</h2>
              <img className="PokemonCard" src={data.sprites.front_default} alt=""/>
              <h2>{data.name}</h2>
            </div>
          </>
        )
      })
    }

    </>
  )
}
