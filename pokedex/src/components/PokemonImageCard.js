import React from "react";
import "./Pokemon.css"


export const PokemonImageCard = ({pokemon, loading, pokemonInfo}) => {
  // console.log(pokemon)

  return (
    <>
    {
      loading ? <h1>Loading...</h1>: pokemon.map((data)=>{
        return (
          
            <div className="PokemonContainer" key={data.id} 
            onClick={()=>{
              pokemonInfo(data)
            }}
            >
              <div>
              <h2>#{data.id}</h2>
              </div>
              <img className="PokemonCardImage" src={data.sprites.front_default} alt=""/>
              <div> 
              <h2>{data.name}</h2>
            </div>
            </div>
          
        )
      })
    }

    </>
  )
}
