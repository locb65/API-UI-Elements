# Custom PokéDex with Modals

<p align='center'>Welcome to my own Custom PokDex!
<img src = 'https://freight.cargo.site/t/original/i/ebf49f92780191005765268a05f6bdb8c713cee9d2dca01da8e063bb21590c72/gen2-pokedex-online.png'>
</p>


## The PokéDex

The PokéDex is created using a ReactJS framework and 
`create-react-app`.

All the data generated in this PokéDex is taken from [PokeAPI.co](https://www.PokeAPI.co) using the `pokemon` endpoint. The PokéDex data is retrieved from the API using an Axios Library via `const (someConst) = async await get(someEndPoint)` and the `useEffect` hook from React.

We then pass the data once it has been properly fetched from [PokeAPI.co](https://www.PokeAPI.co) to State through `useState` from React.


