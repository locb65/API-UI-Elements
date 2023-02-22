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
            <div className='Abilites'>
              <h2>
                Overgrowth
              </h2>
            </div>
            <div className='Abilites'>
              <h2>
                Chlorophyll
              </h2>
            </div>
          </div>
          <div className='BaseStatContainer'>
            <h3>HP: 60</h3>
            <h3>Attack: 61</h3>
            <h3>Defense: 63</h3>
            <h3>Special Attack: 80</h3>
            <h3>Special Defense: 80</h3>
            <h3>Speed: 60</h3>
          </div>
          <div className='Weight'>
            <h3>Weight: 130</h3>
          </div>
        </div>
        </>
        )

      }
      
    </>
  )
}
