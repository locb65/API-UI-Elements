import React from 'react'
import './Pokemon.css'

export const PokemonDetails = ({data, resetModal}) => {
  return (
    <>
      {
        (!data) ? '': (
          <div >
            <div className='Modal' 
            style={{ backgroundImage: `Url('https://external-preview.redd.it/o3vmHVLVo49Q1AVS7z2_FJwQClcydDSYMSeSjKZWVTQ.jpg?auto=webp&s=ee2f70b5e3b856e6d3c21c7cb81e3193f243385b')`, backgroundSize:'cover', opacity: '0.99'}} 
             >
              <div className='close-btn'><button onClick={()=>resetModal()}>Close</button></div>
            <div className='PokemonName'>
              <h1 >{data.name}</h1>
              <div className='PokemonSprite'>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${data.id}.png`} alt=''/>
                <div className='pokemonShadow'></div>
              </div>
          </div><div className='spacing'></div>
          <div className='Weight'>
            <h3>Weight: {data.weight}g</h3>
          </div>
          <div className='TypesContainer'>
            {
              data.types.map((pokemon, index)=>{
                console.log(index)
                return (
                  <h2 key={index}>
                    {pokemon.type.name}
                  </h2>
                )
              })
            }
          </div>
          <div className='AbilityContainer'>
            {
              data.abilities.map((pokemon, index)=>{
                return(
                    <div key={index} className='Abilites'>
                      <h2>
                        {pokemon.ability.name}
                      </h2>
                    </div>
                )
              })
            }
            </div>
          <div className='BaseStatContainer'>
            {
              data.stats.map((pokemon, index)=>{
                return(
                  <div key={index} style={{display: 'flex', justifyContent: 'center', alignItems: 'initial', alignContent:'initial'}}>
                    <h3 style={{textAlign: 'left', width: '70%' }}>{pokemon.stat.name}:</h3> <h3>{pokemon.base_stat}</h3>
                  </div >
                )
              })
            }
          </div>
        </div>
      <div className="BackShadow" onClick={()=>resetModal()}>
    </div>
  </div>
  )
  }
    </>
  )
}

