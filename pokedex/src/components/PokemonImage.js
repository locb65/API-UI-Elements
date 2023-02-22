import React from "react";
import "./Pokemon.css"


export const PokemonImage = ({pokemon, loading}) => {
  console.log(pokemon)

  return (
    <>
    {
      loading ? <h1> Loading... </h1>: pokemon.map((data, id)=>{
        return (
          <>
            <div className="PokemonContainer" key={id}>
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
