import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";

// Resource imports
import { skills } from "../../resources/resume.json";

const renderSections = items => {
  const classes = myStyles();
  const useDivider = index => {
    if (index > 0) {
      return <Divider />;
    }
  };
  return items.map((item, index) => {
    return (
      <div className={classes.root}>
        {useDivider(index)}
        <Paper className={classes.skillGroup}>
          <Typography className={classes.header} variant="h5" color="primary">
            {item.desc}
          </Typography>
          <Grid container spacing={0} className={classes.boot}>
            {renderDuties(item.list)}
          </Grid>
        </Paper>
      </div>
    );
  });
};

const renderDuties = skills => {
  const classes = myStyles();
  return skills.map(skill => {
    return (
      <Grid item xs={3}>
        <Paper className={classes.paper}>
          <Typography>{skill}</Typography>
        </Paper>
      </Grid>
    );
  });
};

const Skills = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{skills.header}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <Typography>{renderSections(skills.detail)}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default Skills;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  details: {
    display: "flex",
    flexDirection: "column",
    justify: "space-between"
  },
  summary: {
    overflow: "hidden",
    "&:hover": {
      backgroundColor: theme.palette.primary.light
    }
  }
}));

const myStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1)
  },
  header: {
    textAlign: "center",
    fontWeight: "bold",
    padding: theme.spacing(1),
    color: theme.palette.text.primary
  },
  paper: {
    padding: theme.spacing(1),
    margin: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.grey[600]
  },
  skillGroup: {
    backgroundColor: theme.palette.grey[700]
  }
}));
