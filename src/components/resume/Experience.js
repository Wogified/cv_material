import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";

// Resource imports
import { jobs } from "../../resources/resume.json";

const renderSections = jobs => {
  const classes = myStyles();
  return jobs.map(job => {
    return (
      <div className={classes.boot}>
        <Grid container spacing={0}>
          <Grid item xs={9} className={classes.place}>
            {job.institution}
          </Grid>
          <Grid item xs={3} className={classes.date}>
            {job.location}
          </Grid>
          <Grid item xs={6} className={classes.deg}>
            {job.role}
          </Grid>
          <Grid item xs={6} className={classes.gpa}>
            {job.start_date} to{" "}
            {job.end_date == null ? "Present" : job.end_date}
          </Grid>
          <Grid item xs={12}>
            <List component="nav" aria-label="main mailbox folders">
              {renderDuties(job.responsibilities)}
            </List>
          </Grid>
        </Grid>
      </div>
    );
  });
};

const renderDuties = duties => {
  const classes = myStyles();
  const useDivider = index => {
    if (index > 0) {
      return <Divider />;
    }
  };
  return duties.map((duty, index) => {
    return (
      <div>
        {useDivider(index)}
        <ListItem>
          <ListItemText primary={duty} />
        </ListItem>
      </div>
    );
  });
};

const Experience = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{jobs.header}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <Typography>{renderSections(jobs.positions)}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default Experience;

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: "grey[700]"
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
  boot: {
    flexGrow: 1,
    padding: theme.spacing(1)
  },
  place: {
    textAlign: "left",
    fontWeight: "bold",
    textDecoration: "underline"
  },
  date: {
    textAlign: "right"
  },
  deg: {
    textAlign: "left"
  },
  gpa: {
    textAlign: "right"
  },
  bullet: {
    listStylePosition: "outside"
  }
}));
