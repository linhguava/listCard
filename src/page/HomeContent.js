import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

import Header from "../component/Header";
import Test from "../component/Test";

const useStyles = makeStyles((theme) => ({
  // app: {
  //   width: "80%",
  //   display: "block",
  //   margin: "auto",
  // },
}));

export default function HomeContent() {
  const classes = useStyles();

  return (
    <Container className={classes.homeContent}>
      <Header />
      <Test />
    </Container>
  );
}
