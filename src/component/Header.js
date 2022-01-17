import React from "react";
import { Button, Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import HeaderImg from "../image/header.webp";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundImage: `url(${HeaderImg})`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "70vh",
  },
  content: {
    color: "#fff",
    textAlign: "center",
  },
  title: {
    fontSize: "59px",
  },
  description: {
    fontSize: "16px",
    paddingBottom: "20px",
  },
  button: {
    backgroundColor: "#ee4853",
    width: "222px",
    fontSize: "18px",
    borderRadius: "14.66667vw",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <div className={classes.content}>
        <Typography className={classes.title}>
          Get rewarded in a flash.
        </Typography>
        <Typography className={classes.description}>
          Complete five Deals1 and claim* a $100 Gift Card from one of your
          favorite brands!
        </Typography>
        <Link href="/card" underline="none">
          <Button
            className={classes.button}
            color="primary"
            variant="contained"
          >
            Get a Quick Start
          </Button>
        </Link>
      </div>
      {/* <TextField id="outlined-basic" label="Name" variant="outlined" /> */}
    </div>
  );
}
