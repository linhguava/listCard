import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

import Header from "../component/Header";
import Intro from "../component/Intro";

const useStyles = makeStyles((theme) => ({
  homeContent: {
    width: "80%",
    margin: "auto",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
}));

export default function HomeContent() {
  const classes = useStyles();

  return (
    <div className={classes.homeContent}>
      <Header />
      <Intro />
    </div>
  );
}
