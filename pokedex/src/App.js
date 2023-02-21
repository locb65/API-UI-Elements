import logo from './logo.svg';
import './App.css';

fetch('https://pokeapi.co/api/v2/pokedex/2/')
  .then(response => response.json())
  .then(json => console.log(json))



function App(props) {

  return (
    <div className="App">

    </div>
  );
}

export default App;

