import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPokemonById } from "../../services/getPokemonById";
import "./PokemonDetail.css";

// "p" => "pokemon"
// "dtl" => "detail"
// "cont" => "container"

const PokemonDetail = () => {
  const { pokemonId } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function loadPokemon() {
      const pokemonData = await getPokemonById(pokemonId);
      setPokemon(pokemonData);
    }

    loadPokemon();
  }, []);

  return (
    <article className="p_dtl_cont">
      {!pokemon && <p>Loading...</p>}

      {pokemon && (
        <>
          <div className="p_dtl_main">
            <img src={pokemon.image} alt="" />
            <h2>{pokemon.name}</h2>
          </div>
          <section className="p_misc_info">
            <div>
              <h4>Species</h4>
              <p>{pokemon.species}</p>
            </div>
            <div>
              <h4>Weight</h4>
              <p>{pokemon.weight}</p>
            </div>
            <div>
              <h4>Base Experience</h4>
              <p>{pokemon.baseExperience}</p>
            </div>
          </section>
          <div className="p_dtl_list_cont">
            <section>
              <h3>Type</h3>
              <ul className="p_dtl_list">
                {pokemon.types.map((type) => (
                  <li className="p_dtl_list_element" key={type}>
                    {type}
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h3>Abilities</h3>
              <ul className="p_dtl_list">
                {pokemon.abilities.map((ability) => (
                  <li className="p_dtl_list_element" key={ability}>
                    <p>{ability.toUpperCase()}</p>
                  </li>
                ))}
              </ul>
            </section>
          </div>
          <section>
            <h3>Stats</h3>
            <ul className="p_dtl_list">
              {pokemon.stats.map((stat) => (
                <li className="p_dtl_list_element" key={stat.name}>
                  <div>
                    <p>{stat.name.toUpperCase()}</p>
                    <p>{stat.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </>
      )}
    </article>
  );
};

export default PokemonDetail;
