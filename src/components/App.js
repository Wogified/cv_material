import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import Header from "./Header";
import Sections from "./Sections";

const useStyles = makeStyles({
  thing: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
});

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.thing}>
      <Header />
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <Sections />
    </div>
  );
};

export default App;
