import { useEffect, useState } from "react";
import { getPokemonById } from "../../../services/getPokemonById";
import "./PokemonCard.css";

const intStats = ["hp", "attack", "defense", "speed"];

const PokemonCard = ({ pokemonId }) => {
  const [pokemon, setPokemon] = useState(null);
  const stats = pokemon?.stats.filter((stat) =>
    intStats.includes(stat.name.toLowerCase())
  );

  useEffect(() => {
    async function loadPokemon() {
      const pokemonData = await getPokemonById(pokemonId);
      setPokemon(pokemonData);
    }

    loadPokemon();
  }, []);

  return (
    <article className="p_card_cont">
      {!pokemon && <p>Loading...</p>}

      {pokemon && (
        <>
          <div className="p_card_img">
            <img src={pokemon.image} alt="" />
          </div>
          <h2>{pokemon.name}</h2>
          <section>
            <h3>Type</h3>
            <ul className="p_card_list">
              {pokemon.types.map((type) => (
                <li className="p_card_element" key={type}>
                  {type}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <ul className="p_card_list">
              {pokemon.stats.map((stat) => (
                <li key={stat.name}>
                  <p className="p_card_element">{stat.name.toUpperCase()}</p>
                  <p className="p_card_element">{stat.value}</p>
                </li>
              ))}
            </ul>
          </section>
        </>
      )}
    </article>
  );
};

export default PokemonCard;
