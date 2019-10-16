import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

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
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  );
};

export default App;
