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
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=50")
      .then((res) => setPokemons(res.data.results));
    //.cath((err) => console.log(err));
  };

  return (
    <div>
      <NavBar />

      <Container maxWidth="xg">
        <Grid container>
          {pokemons.map((pokemon) => (
            <Grid item xs={3}>
              <PokemonCard />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};
