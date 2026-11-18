import './App.css';
import PokemonCard from "./components/PokemonCard/PokemonCard";
import SketchFrame from "./components/SketchFrame/SketchFrame";
import outlines from './assets/outlines';
import pokemon from './assets/pokemon/generation-vii/';
import PokemonGrid from './components/PokemonGrid/PokemonGrid';
import Header from './components/Header/Header';
import { useState } from 'react';



function App() {

  const [search, setSearch] = useState('');

  const query = search.trim().toLowerCase();
  const matchingPokemon = pokemon.filter((record) =>
    record.name.toLowerCase().includes(query)
  )

  return (
    <div>
      <Header
        searchTerm={search}
        updateSearchTerm={setSearch}
      />
    <PokemonGrid>
      {matchingPokemon.map((record, index) => (
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
      </div>
  )
}

export default App
