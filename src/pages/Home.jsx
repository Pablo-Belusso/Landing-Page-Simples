import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
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
    var response = axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setPokemons(res));

    /* axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=50") // Pede para API 50 pokemons
      .then((res) => setPokemons(res.data.results)); */
    //.cath((err) => console.log(err));
  };

  return (
    <div>
      <NavBar />

      <Container maxWidth="xg">
        <Grid container spacing={2}>
          {pokemons.map((pokemon, key) => (
            <Grid item xs={2} key={key}>
              <PokemonCard
                name={pokemon.data.name}
                image={pokemon.data.sprites.front_default}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};
