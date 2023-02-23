import React from 'react'
import './Pokemon.css'

export const PokemonDetails = ({data, setPokeModal}) => {
  console.log(data)
  const checkClose = () => {
    setPokeModal = false 
    console.log(setPokeModal)
  }
  return (
    <>
      {
        (!data) ? '': (
          <>
            <div className="BackShadow">
            <div className='Modal'>
            <div className='close-btn'><button onClick={()=>checkClose()}>X</button></div>
            <div>
            <h1>{data.name}</h1>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${data.id}.png`} alt=''/>
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
            <h3>Weight: {data.weight}g</h3>
          </div>
        </div>
        </div>
        </>
        )

      }
      
    </>
  )
}

