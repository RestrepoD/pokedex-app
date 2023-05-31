import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { UserNameContext } from "../../context/UserNameContext";
import PokemonList from "../../components/Pokedex/PokemonList/PokemonList";
import FiltersForm from "../../components/Pokedex/FiltersForm/FiltersForm";
import "./Pokedex.css";

const Pokedex = () => {
  const { userName } = useContext(UserNameContext);
  const { pokemons, pokemonName, pokemonTypeId } = useLoaderData();

  return (
    <section>
      <p className="pkdx_msg">
        <em className="pkdx_msg_username">Welcome {userName}</em>, here you can
        find your favourite pokemon
      </p>
      <FiltersForm initialName={pokemonName} initialType={pokemonTypeId} />

      {!pokemons.length ? (
        <p>There are no pokemons</p>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </section>
  );
};

export default Pokedex;
