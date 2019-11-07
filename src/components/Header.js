import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const Header = () => {
  const classes = useStyles();
  return (
    <Typography className={classes.header} variant="h1">
      Kevin Chang
    </Typography>
  );
};

export default Header;

const useStyles = makeStyles(theme => ({
  header: {
    color: theme.palette.text.primary,
    padding: theme.spacing(3)
  }
}));
