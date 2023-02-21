import React from 'react'
import { PokemonImage } from './PokemonImage'
import { PokemonDetails } from './PokemonDetails'
import "./Pokemon.css"

export const Main = () => {
  return (
    <>
    <div className='MainContainer'>
        <div className='PokedexContainer'>
            <PokemonImage/>
            <PokemonImage/>
            <PokemonImage/>
            <PokemonImage/>
            <PokemonImage/>
        </div>
        <div className='PokeDetails'>
            <PokemonDetails/>
            <PokemonDetails/>
            <PokemonDetails/>
            <PokemonDetails/>
            <PokemonDetails/>
        </div>
    </div>
    </>
  )
}
