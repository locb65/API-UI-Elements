import React from 'react'
import './Pokemon.css'

export const PokemonDetails = ({data}) => {
  console.log(data)
  return (
    <>
      {
        (!data) ? '': (
          <>
          <div>
            <div>
            <h1>{data.name}</h1>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt=''/>
          </div>
          <div className='TypesContainer'>
            {
              data.types.map(pokemon=>{
                return (
                  <>
                    <h2>
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
            <h3>Weight: {data.weight}lbs</h3>
          </div>
        </div>
        </>
        )

      }
      
    </>
  )
}

