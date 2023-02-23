
import React from 'react'
import { PokemonImageCard } from './PokemonImageCard'
import { PokemonDetails } from './PokemonDetails'
import axios from 'axios'
import { useEffect, useState } from 'react'
import "./Pokemon.css"
import { Header } from './Header'
import { Footer } from './Footer'

export const Main = () => {
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    const [pokeDexData, setPokeDexData] = useState();
    const [pokeModal, setPokeModal] = useState(false)
    


    const fetchPokeData = async() => {
        setLoading(true);
        const res = await axios.get(url);
        // console.log(res)
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokeData(res.data.results)
        setLoading(false)
        // console.log(pokeData)
    }

    const getPokeData=async(res)=>{
        setPokeData([])
        res.map(async(item)=>{
            const Pokemons=await axios.get(item.url)
            // console.log(Pokemons.data)
            setPokeData(state =>{
                state=[...state, Pokemons.data]
                state.sort((a,b)=>a.id>b.id?1:-1)
                return state
            })
        })
    }


    useEffect(() => {

        fetchPokeData ();
    }, [url])

const resetModal = (event) => {

    if(pokeDexData !== null){
    setPokeDexData(null)
    }
}

    return (
        <>
        <Header/>
            <div className='MainContainer'>
                <div className='PokedexContainer'>
                    <PokemonImageCard onClick={()=>resetModal} pokemon={pokeData} loading={loading} pokemonInfo={poke=>setPokeDexData(poke)}/>
                    <div className='button-group'>
                        <button onClick={()=>{
                            setPokeData([])
                            setUrl(prevUrl)
                        }}>Previous</button>
                        <button onClick={()=>{
                            setPokeData([])
                            setUrl(nextUrl)
                        }}>Next</button>
                    </div>
                </div>

                <div className='PokeDetails'>
                    <PokemonDetails resetModal ={resetModal} setPokeModal={setPokeModal} data={pokeDexData}/>
                    
                </div>
            </div>
            <Footer/>
        </>
    )
}