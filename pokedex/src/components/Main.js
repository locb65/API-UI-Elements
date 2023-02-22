import React from 'react'
import { PokemonImage } from './PokemonImage'
import { PokemonDetails } from './PokemonDetails'
import axios from 'axios'
import { useEffect, useState } from 'react'
import "./Pokemon.css"

export const Main = () => {
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
    const [nextUrl, setNextUrl] = useState()
    const [prevUrl, setPrevUrl] = useState()

    const fetchPokeData = async() => {
        setLoading(true);
        const res = await axios.get(url);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokeData(res.data.results)
        setLoading(false)
        // console.log(pokeData)
    }
    const getPokeData=async(res)=>{
        res.map(async(item)=>{
            const Pokemons=await axios.get(item.url)
            // console.log(Pokemons.data)
            setPokeData(state =>{
                state=[...state ,Pokemons.data]
                state.sort((a,b)=>a.id>b.id?1:-1)
                return state
            })
        })
    }


    useEffect(() => {
        fetchPokeData ();

    }, [url])

    return (
        <>
            <div className='MainContainer'>
                <div className='PokedexContainer'>
                    <PokemonImage pokemon={pokeData} loading={loading}/>
                    <div className='button-group'>
                        <button>Previous</button>
                        <button>Next</button>
                    </div>
                </div>

                <div className='PokeDetails'>
                    <PokemonDetails/>

                </div>
            </div>
        </>
    )
    }
