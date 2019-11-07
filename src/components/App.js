import React from "react";
import { makeStyles, Button, Container } from "@material-ui/core";
import { positions } from "@material-ui/system";
import { ThemeProvider } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";

import theme from "./theme";

import Header from "./Header";
import Sections from "./Sections";

const useStyles = makeStyles(theme => ({
  main: {
    backgroundColor: grey[700],
    height: "100%"
    // alignItems: "flex-end"
  },
  expandos: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  test: {
    position: "fixed",
    bottom: 0

    // display: "flex",
    // alignItems: "flex-end"
  }
}));

const App = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Container className={classes.main} maxWidth="false">
        <Container className={classes.expandos} maxWidth="md">
          <Header />
          <Sections />
        </Container>
        <Container className={classes.test}>
          <Header />
        </Container>
      </Container>
    </ThemeProvider>
  );
};

export default App;
