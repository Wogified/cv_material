import React from "react";
import { makeStyles, Button, Container } from "@material-ui/core";
import { positions } from "@material-ui/system";
import { ThemeProvider } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";

import theme from "./theme";

import Header from "./Header";
import Education from "./resume/Education";
import Experience from "./resume/Experience";
import Projects from "./resume/Projects";
import Skills from "./resume/Skills";

const useStyles = makeStyles(theme => ({
  main: {
    backgroundColor: grey[700],
    height: "100%",
    width: "100%"

    // alignItems: "flex-end"
  },
  expandos: {
    display: "flex",
    flex: 1,
    width: "100%",
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
      <Container className={classes.main} maxWidth="false" maxHeight="false">
        <Container className={classes.expandos} maxWidth="md">
          <Header />
          <Education />
          <Experience />
          <Projects />
          <Skills />
        </Container>
      </Container>
    </ThemeProvider>
  );
};

export default App;
