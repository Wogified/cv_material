import React from "react";
import { makeStyles, Button, Container } from "@material-ui/core";

import Header from "./Header";
import Sections from "./Sections";

const useStyles = makeStyles(theme => ({
  thing: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.thing}>
      <Header />
      <Container>
        <Sections />
      </Container>
    </div>
  );
};

export default App;
