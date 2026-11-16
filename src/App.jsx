import './App.css';
import PokemonCard from "./components/PokemonCard/PokemonCard";
import SketchFrame from "./components/SketchFrame/SketchFrame";
import outlines from './assets/outlines';
import pokemon from './assets/pokemon/generation-vii/';
import PokemonGrid from './components/PokemonGrid/PokemonGrid';

function App() {

  return (
    <PokemonGrid>
      {pokemon.map((record, index) => (
        <SketchFrame
          key={record.id}
          image={outlines[index % outlines.length]}
        >
          <PokemonCard
            pokemonImage={record.frontImage}
            name={record.name}
            nameImage={record.nameImage}
            hp={record.hp}
            attack={record.attack}
          />
        </SketchFrame>
      ))}
    </PokemonGrid>
  )
}

export default App
