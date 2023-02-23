# Custom PokéDex with Modals

<h2 align='center'>Welcome to my own Custom PokDex!
<img src = 'https://freight.cargo.site/t/original/i/ebf49f92780191005765268a05f6bdb8c713cee9d2dca01da8e063bb21590c72/gen2-pokedex-online.png'>
</h2>

_________
## The PokéDex
__________

The PokéDex is created using a ReactJS framework and 
`create-react-app`. 

All the data generated in this PokéDex is taken from [PokeAPI.co](https://www.PokeAPI.co) using the `pokemon` endpoint. The PokéDex data is retrieved from the API using an Axios Librar, which is an open source library for HTML and Browsers, via `const (someConst) = async await get(someEndPoint)` and the `useEffect` hook from React. To install the Axios Library and it's dependencies, do the following:<br/> 
- cd into the react app from the terminal, then run the command 
`npm i axios` which will 

-   Axios's syntax differs from React `fetch()` because in Axios, instead of calling: 
```
fetch('someEndPoint)
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
___________


## State and Components
_____________

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

### State, Data, Rendering to UI
______________

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




