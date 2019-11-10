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
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
// Resource imports
import { school } from "../../resources/resume.json";

const useStyles = makeStyles(theme => ({
  toot: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    paddingBottom: "0px",
    paddingTop: "0px",
    color: theme.palette.text.primary
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  details: {
    display: "flex",
    flexDirection: "column",
    justify: "space-between"
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
  }
}));

const renderSections = props => {
  const classes = myStyles();
  const handleClick = index => {
    this.setState({ [index]: true });
  };
  return props.school.degrees.map((item, index) => {
    return (
      <div className={classes.boot}>
        <List className={classes.toot}></List>
        {/* <Grid container spacing={0}>
          <Grid item xs={9} className={classes.place}>
            {item.place}
          </Grid>
          <Grid item xs={3} className={classes.date}>
            {item.finish_date}
          </Grid>
          <Grid item xs={8} className={classes.deg}>
            {item.degree}
          </Grid>
          <Grid item xs={4} className={classes.gpa}>
            GPA: {item.gpa}
          </Grid>
        </Grid> */}
      </div>
    );
  });
};

const Education = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick2 = index => {
    this.useState({ [index]: true });
  };

  return (
    <List className={classes.toot}>
      <ListItem button onClick={handleClick}>
        <ListItemText primary={school.header} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={!open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {school.degrees.map((item, index) => (
            <div key={index}>
              <ListItem button={true} onClick={handleClick2(index)}>
                <ListItemText
                  primary={item.place}
                  secondary={
                    <p>
                      <b>Author: </b>
                      {item.deg}
                    </p>
                  }
                />
                {props[index] ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={props[index]} timeout="auto" unmountOnExit={true}>
                <p>POOP</p>
              </Collapse>
            </div>
          ))}
        </List>
      </Collapse>
    </List>
  );
};

export default Education;
{
  /* <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={classes.summary}
        >
          <Typography className={classes.heading}>{school.header}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <Typography>{</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel> */
}
