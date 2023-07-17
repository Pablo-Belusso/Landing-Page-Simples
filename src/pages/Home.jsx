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
    console.log(endpoints);

    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=50") // Pede para API 50 pokemons
      .then((res) => setPokemons(res.data.results));
    //.cath((err) => console.log(err));
  };

  return (
    <div>
      <NavBar />

      <Container maxWidth="xg">
        <Grid container>
          {pokemons.map((pokemon, key) => (
            <Grid item xs={3} key={key}>
              <PokemonCard name={pokemon.name} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};
