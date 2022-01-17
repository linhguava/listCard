import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  test: {
    backgroundColor: "yellow",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "50vh",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      padding: "40px 0",
    },
  },
  title: {
    width: "50%",
    fontSize: "24px",
    fontWeight: "600",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  description: {
    width: "50%",
    padding: "20px 0",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  button: {
    backgroundColor: "#135ec7",
    width: "222px",
    fontSize: "18px",
    borderRadius: "14.66667vw",
  },
}));

export default function Test() {
  const classes = useStyle();

  return (
    <div className={classes.test}>
      <Typography className={classes.title}>
        You can typically complete all of the
      </Typography>
      <Typography className={classes.description}>
        You can typically complete all of the required sponsored Deals within
        5-7 days (some may take up to 60 days to complete). Once you complete
        the required number of Deals, you must complete the reward claims
        process, which requires ID verification. It typically takes our customer
        service team 5-7 days to verify and deliver your Reward. Get a Quick
        Start Want to track your progress? Sign up for SMS alerts to keep you up
        to date on your Reward status and Deal credits.
      </Typography>
      <Button className={classes.button} color="primary" variant="contained">
        Get a Quick Start
      </Button>
    </div>
  );
}
