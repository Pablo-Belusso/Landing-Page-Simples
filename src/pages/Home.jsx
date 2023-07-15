import React from "react";
import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import NavBar from "../components/NavBar";
import PokemonCard from "../components/PokemonCard";

export const Home = () => {
  return (
    <div>
      <NavBar />

      <Container maxWidth="xg">
        <Grid container>
          <Grid item xs={3}>
            <PokemonCard />
          </Grid>

          <Grid item xs={3}>
            <PokemonCard />
          </Grid>

          <Grid item xs={3}>
            <PokemonCard />
          </Grid>

          <Grid item xs={3}>
            <PokemonCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
