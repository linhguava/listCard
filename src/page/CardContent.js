import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

import ListCard from "../component/ListCard";

const useStyles = makeStyles((theme) => ({
  homeContent: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function HomeContent() {
  const classes = useStyles();

  return (
    <Container className={classes.homeContent}>
      <ListCard />
    </Container>
  );
}
