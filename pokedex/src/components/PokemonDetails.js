import React from 'react'
import './Pokemon.css'

export const PokemonDetails = ({data, setPokeModal, resetModal}) => {
  const checkClose = () => {
    setPokeModal = false 
    console.log(setPokeModal)
  }
  return (
    <>
      {
        (!data) ? '': (
          <>
            
            <div className='Modal' style={{ backgroundImage: `Url('https://external-preview.redd.it/o3vmHVLVo49Q1AVS7z2_FJwQClcydDSYMSeSjKZWVTQ.jpg?auto=webp&s=ee2f70b5e3b856e6d3c21c7cb81e3193f243385b')`, backgroundSize:'cover'}}>
            <div className='close-btn'><button onClick={()=>resetModal()}>X</button></div>
            <div className='PokemonName'>
            <h1 >{data.name}</h1>
            <div className='PokemonSprite'>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${data.id}.png`} alt=''/>
            <div className='pokemonShadow'></div>
            </div>
          </div><div className='spacing'></div>
          <div className='TypesContainer'>
            {
              data.types.map(pokemon=>{
                return (
                  <>
                      <h2 >
                    {pokemon.type.name}
                      </h2>
                  </>
                )
              })
            }

          </div>
          <div className='AbilityContainer'>
            {
              data.abilities.map(pokemon=>{
                return(
                  <>
                    <div className='Abilites'>
                      <h2>
                        {pokemon.ability.name}
                      </h2>
                    </div>
                  </>

                )
                
              })
            }
            </div>

          <div className='BaseStatContainer'>
            {
              data.stats.map(pokemon=>{
                return(
                  <>
                    <h3>{pokemon.stat.name}: {pokemon.base_stat}</h3>
                  </>
                )
              })
            }
          </div>
          <div className='Weight'>
            <h3>Weight: {data.weight}g</h3>
          </div>
        </div>
        <div className="BackShadow" onClick={()=>resetModal()}>
        </div>
        </>
        )

      }
      
    </>
  )
}

