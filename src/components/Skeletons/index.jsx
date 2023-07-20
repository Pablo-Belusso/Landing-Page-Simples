import { Container, Skeleton } from "@mui/material";
import React from "react";

export const Skeletons = () => {
  return (
    <Container maxWidth="xxl">
      <Skeleton
        variant="rounded"
        width="100%"
        height={100}
        sx={{ marginBottom: "1em" }}
      />
      <Skeleton
        variant="rounded"
        width="100%"
        height={100}
        sx={{ marginBottom: "1em" }}
      />
      <Skeleton
        variant="rounded"
        width="100%"
        height={100}
        sx={{ marginBottom: "1em" }}
      />
      <Skeleton
        variant="rounded"
        width="100%"
        height={100}
        sx={{ marginBottom: "1em" }}
      />
      <Skeleton
        variant="rounded"
        width="100%"
        height={100}
        sx={{ marginBottom: "1em" }}
      />
    </Container>
  );
};
