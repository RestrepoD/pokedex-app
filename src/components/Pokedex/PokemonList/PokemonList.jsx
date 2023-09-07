import { useState } from "react";
import { usePagination } from "../../../hooks/usePagination";
import { Link } from "react-router-dom";
import Paginator from "../Paginator/Paginator";
import PokemonCard from "../PokemonCard/PokemonCard";
import "./PokemonList.css";

const PokemonList = ({ pokemons }) => {
  const [pokemonsPerPage, setPokemonsPerPage] = useState(20);
  const [currentPage, totalPages, pokemonSlice, changePageTo] = usePagination(
    pokemons,
    pokemonsPerPage
  );

  return (
    <section>
      <Paginator
        totalPages={totalPages}
        onChangePage={changePageTo}
        onNextPage={() => changePageTo(currentPage + 1)}
        onBackPage={() => changePageTo(currentPage - 1)}
      />
      <ul className="p_list_cont">
        {pokemonSlice.map((pokemon) => (
          <li className="p_list_i" key={pokemon.url}>
            <Link
              to={`/pokedex/${pokemon.url.split("/").at(-2)}`}
              className="link_comp"
            >
              <PokemonCard pokemonId={pokemon.url.split("/").at(-2)} />
            </Link>
          </li>
        ))}
      </ul>
      <Paginator
        totalPages={totalPages}
        onChangePage={changePageTo}
        onNextPage={() => changePageTo(currentPage + 1)}
        onBackPage={() => changePageTo(currentPage - 1)}
      />
    </section>
  );
};

export default PokemonList;
