import './PokemonCard.css';
import PokemonImage from '../PokemonImage/PokemonImage.jsx';
import StatPill from '../StatPill/StatPill.jsx';

export default function PokemonCard({ pokemonImage, name, nameImage, hp, attack }) {
  return (
    <div className="pokemon-card">
      <PokemonImage pokemonImage={pokemonImage} />
      {nameImage ? (
        <img className="pokemon-name" src={nameImage} alt={name} />
      ) : (
        <p>{name}</p>
      )}
        <StatPill
          name="hp"
          value={hp}
          color='salmon'
        />
        <StatPill
          name="atk"
          value={attack}
          color='dodgerblue'
        />
    </div>
  );
}
