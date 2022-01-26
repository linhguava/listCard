import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeContent from "./page/HomeContent";
import CardContent from "./page/CardContent";

const useStyles = makeStyles((theme) => ({}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter className={classes.app}>
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/card" element={<CardContent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
