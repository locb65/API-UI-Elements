import React from 'react'
import { PokemonImage } from './PokemonImage'
import { PokemonDetails } from './PokemonDetails'
import axios from 'axios'
import { useEffect, useState } from 'react'
import "./Pokemon.css"

export const Main = () => {
    const [pokeData, setPokeData] = useState()


    return (
        <>
            <div className='MainContainer'>
                <div className='PokedexContainer'>
                    <PokemonImage/>
                    <PokemonImage/>
                    <PokemonImage/>
                    <PokemonImage/>
                    <PokemonImage/>
                    <div className='button-group'>
                    <button>Previous</button>
                    <button>Next</button>
                </div>
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
