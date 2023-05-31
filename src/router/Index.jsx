import { createBrowserRouter } from "react-router-dom";
import { pokedexLoader } from "./loaders/pokedexLoader";
import Layout from "../components/common/Layout/Layout";
import ProtectedRoute from "../components/common/ProtectedRoute";
import Home from "../pages/Home/Home";
import Pokedex from "../pages/Pokedex/Pokedex";
import PokemonDetail from "../pages/PokemonDetail/PokemonDetail";

// El router de tipo browser siempre necesita que se configure correctamente la plataforma de despliegue
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  // {
  //   path: "/pokedex",
  //   element: <p>Here be Pokemons list</p>,
  // },
  // {
  //   path: "/pokemon/:pokemonId",
  //   element: <p>Here be individual pokemon details</p>,
  // },
  {
    path: "/pokedex",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <Pokedex />,
        loader: pokedexLoader,
      },
      {
        path: ":pokemonId",
        element: <PokemonDetail />,
      },
    ],
  },
]);
