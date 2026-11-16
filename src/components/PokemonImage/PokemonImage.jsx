import "./PokemonImage.css"

export default function PokemonImage({pokemonImage}){
  return <div className="pokemon-img">
           <img src={pokemonImage} />
           </div>
}
