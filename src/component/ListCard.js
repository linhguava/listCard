import { Link, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import cashappp from "../image/cashapp.jpeg";
import amazon from "../image/amazon.jpeg";
import louisvuition from "../image/louisvuition.jpeg";
import shein from "../image/shein.jpeg";
import React from "react";
const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(1),
    textAlign: "center",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      height: "100vh",
    },
  },
  cardContent: {
    width: "217px",
    minHeight: "230px",
    maxHeight: "250px",
    border: "1px solid",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "5px",
    [theme.breakpoints.down("xs")]: {
      width: "170px",
      minHeight: "200px",
      maxHeight: "200px",
    },
  },
  img: {
    // minHeight: "120px",
    // maxHeight: "120px",
    height: "120px",
    // minWidth: "200px",
    // maxWidth: "200px",
    [theme.breakpoints.down("xs")]: {
      width: "150px",
    },
  },
  title: {
    fontSize: "20px",
    paddingTop: "20px",
  },
  link: {
    textAlign: "center",
    color: "#000",
    "&:hover": {
      color: "blue",
    },
  },
}));

export default function ListCard() {
  const classes = useStyles();

  return (
    <Grid
      container
      justifyContent="center"
      spacing={2}
      className={classes.card}
    >
      <Grid className={classes.cardContent}>
        <Link
          href="https://stackztrs.com/U9RFvni8"
          className={classes.link}
          underline="none"
        >
          <img src={amazon} alt="Amazon" className={classes.img} />
          <Typography className={classes.title}>Amazon</Typography>
        </Link>
      </Grid>
      <Grid className={classes.cardContent}>
        <Link
          href="https://stackztrs.com/6cCgjW0u"
          className={classes.link}
          underline="none"
        >
          <img src={shein} alt="Shein" className={classes.img} />
          <Typography className={classes.title}>Shein</Typography>
        </Link>
      </Grid>
      <Grid className={classes.cardContent}>
        <Link
          href="https://stackztrs.com/P6O19qHD"
          className={classes.link}
          underline="none"
        >
          <img src={louisvuition} alt="Louis Vuition" className={classes.img} />
          <Typography className={classes.title}>Louis Vuition</Typography>
        </Link>
      </Grid>

      <Grid className={classes.cardContent}>
        <Link
          href="https://stackztrs.com/mYOB3CbZ"
          className={classes.link}
          underline="none"
        >
          <img src={cashappp} alt="Cash App" className={classes.img} />
          <Typography className={classes.title}>Cash App</Typography>
        </Link>
      </Grid>
    </Grid>
  );
}
