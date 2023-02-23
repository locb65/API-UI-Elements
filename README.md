# Custom PokéDex with Modals

<h2 align='center'>Welcome to my own Custom PokDex!
<img src = 'https://freight.cargo.site/t/original/i/ebf49f92780191005765268a05f6bdb8c713cee9d2dca01da8e063bb21590c72/gen2-pokedex-online.png'>
</h2>

_________
## The PokéDex
__________
The UI is set up to display a group of Pokémons as small rectangular cards.

<p align ='center'><img src= './pokedex/src/images/PokeCards.png' width = 300px >

The App is set up to load 20 Pokémons per render and the next/previous set of Pokémons can be rendered using the buttons at the botton of the APP.

<p align ='center'><img src ='./pokedex/src/images/Nav-Buttons.png' width = 300px>


When a Pokémon card is click, A popup window will appear showing more in-depth details about that Pokémon like so:


<p align ='center'><img src ='./pokedex/src/images/Popup.png' width = 300px>

-----------
The PokéDex is created using a ReactJS framework and 
`create-react-app`. 

All the data generated in this PokéDex is taken from [PokeAPI.co](https://www.PokeAPI.co) using the `pokemon` endpoint. The PokéDex data is retrieved from the API using an Axios Librar, which is an open source library for HTML and Browsers, via `const (someConst) = async await get(someEndPoint)` and the `useEffect` hook from React. To install the Axios Library and it's dependencies, do the following:<br/> 
- cd into the react app from the terminal, then run the command 
`npm i axios` which will 

-   Axios's syntax differs from React `fetch()` because in Axios, instead of calling: 
```
fetch('someEndPoint')
.then(response =>response.json)
.then(json=>console.log(json))
```
- you run this instead (in this case I did asycn)

```
const getPokeData=async(res)=>{
    setState(someState)
    }
```

- in doing so you get a much cleaner code that pulls data from an API.


We then pass the data once it has been properly fetched from [PokeAPI.co](https://www.PokeAPI.co) to State through the `useState` hook from React.
__________


## The PokeDex: State and Components


Here you will find how the data is passed to State and then passed to the children components to render the data to the UI and to the Modal.

The generalized map of the PokéDex is below:

```
(Top Level)
Index.js
|
|-------App.js
           |
           |
        Main.js-----|(Path to Lowest Level Components)
                    |-----PokemonImageCard.js
                    |
                    |-----PokemonDetails.js
                    |
                    |-----Header.js & Footer.js
                    

```
_______________

## The PokeDex: State, Data, Rendering to UI


- First the State constants are set up like so in Main.Js:

```
const [pokeData, setPokeData] = useState([]);
const [loading, setLoading] = useState(true);
const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');
const [nextUrl, setNextUrl] = useState();
const [prevUrl, setPrevUrl] = useState();
const [pokeDexData, setPokeDexData] = useState();
const [pokeModal, setPokeModal] = useState(false)
```

* Then the data is fectched from [PokeAPI.co](https://www.PokeAPI.co) and set to pokeData State.
    * The PokeAPI requires a second axios request/promise nested in the first in order to get data about individual Pokémons.
        * The top level request will pull a large JSON object containing the Pokémons. This JSON will results which contains a `{name}`  and `{url}` for each Pokémon and sets the data to the State of `pokeData` by `setPokeData([]). 
        * The nested axios request uses the `{url}` stored in `pokeData` to to pull more data for individual Pokémon for later use in the `<PokemonDetails/>` component
    * Below is the code I set up in the working PokéDex:

```
const getPokeData=async(res)=>{
    setPokeData([])
    res.map(async(item)=>{
        const Pokemons=await axios.get(item.url)
        setPokeData(state =>{
            state=[...state, Pokemons.data]
            state.sort((a,b)=>a.id>b.id?1:-1)
            return state
        })
    })
}
```
_________________
_________
* Then another axios request is made to get the data needed to render groups of Pokémons to the Main Screen of the App. This will later be used to generate clickable Pokémon Cards. This Data will be set to various States for interactivity later.

* The Code is as follows:

```
const fetchPokeData = async() => {
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokeData(res.data.results)
    setLoading(false)
}
```
-----------
----------

* Now that that all the Axios Requests have been made. We can then apply the `useEffect()` hook to the data for the Main screen view by passing `fetchPokeData` to the hook like so:

```
useEffect(() => {
    fetchPokeData ();
}, [url])
```

* Next the State/data needed for each component can be pass to the children of Main via props and JSON destructuring. Example Below oof passing props/state:

```
<div className='MainContainer'>
<div className='PokedexContainer'>
    <PokemonImageCard onClick={()=>resetModal} 
    pokemon={pokeData} 
    loading={loading} 
    pokemonInfo={poke=>setPokeDexData(poke)}/>
```

* Example of destructuring object and receiving state/props in children component:

```
export const PokemonImageCard = ({pokemon, loading, pokemonInfo})...
```

* Now it is possible to pull/render the data we need to the components. Below will showcase the components and a snippet of code that will render the data we want.
1. The First Snippet is what renders the clickable Pokémon Cards.
    * Here there is an `onClick()` being called on the Pokémon Card that will render the Popup Portal

```
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
        )
      })
    }
    </>
  )
}

```
2. The Second Snippet renders the content of the popup Modal.


```
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
            </div>
         )
        }
    </>
  )
}
```
* The Popup Modal itself is created solely through CSS styling which is handled withing Pokemon.css within the `./pokedex/src/components/pokemon.css` path.

* Finally to the Popup needs to be closed somehow. This can be achieved by:
    1. Make a helper function within the Main Component that would handle reseting the State of pokeDexData.
    2. Pass the helper function to the modal component.
    3. Call the helper function by using the  `onClick()` method and passing the helper within onClick.


----------
### Handle Loading Pokemon groups to UI

* Here is how the App handles loading new groups of Pokémons.
    * Above there are Preivous and Next Buttons that are coded into the Main Component.
    * Make a helper function that handles the State of:
    * Then pass the helper function to `onClick()` to handle the `{url}` of the State according to button names.
    * This Should allow for the loading or next and previous groups of Pokémons.

       ```
        const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');
        const [nextUrl, setNextUrl] = useState();
        const [prevUrl, setPrevUrl] = useState();
        ```

## And That is all FOLKS.
# Now go Catch Them ALL!!
<p align = 'center'><img src = 'https://i1.sndcdn.com/artworks-b6gqnrQ8CzjPRMFr-9zxwjw-t500x500.jpg'>

## Frameworks and Languages Used.
* React JS
    * Javascript and CSS
    * Axios Library
        * async & await
    * Props and components
    * Hooks
        * useState
        * useEffect
* Object Oriented Programming
* API Fetching and Manipulations
    * [PokeAPI.co](https://www.PokeAPI.co)

# URL
## Repo URL: https://github.com/locb65/API-UI-Elements
## Deployed URL: https://locb65.github.io/API-UI-Elements/