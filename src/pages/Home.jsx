import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import NavBar from "../components/NavBar";
import PokemonCard from "../components/PokemonCard";
import axios from "axios";

export const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    var endpoints = [];
    for (var i = 1; i < 50; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    //console.log(endpoints);
    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setPokemons(res));
  };

  const pokemonFilter = (name) => {
    var filteredPokemons = [];

    if (name === "") {
      getPokemons();
    }

    for (var i in pokemons) {
      if (pokemons[i].data.name.includes(name)) {
        filteredPokemons.push(pokemons[i]);
      }
    }

    setPokemons(filteredPokemons);
  };

  return (
    <div>
      <NavBar pokemonFilter={pokemonFilter} />

      <Container maxWidth="xg">
        <Grid container spacing={2}>
          {pokemons.map((pokemon, key) => (
            /* Parte responsiva da página */
            <Grid item xs={12} sm={6} md={4} lg={2} key={key}>
              <PokemonCard
                name={pokemon.data.name}
                image={pokemon.data.sprites.front_default}
                types={pokemon.data.types}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};
