import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

// Resource imports
import { jobs } from "../../resources/resume.json";

const styles = theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    paddingBottom: "0px",
    paddingTop: "0px",
    color: theme.palette.text.primary
  },
  desc: {
    flexGrow: 1,
    paddingRight: theme.spacing(3)
  },
  place: {
    textAlign: "left",
    fontWeight: "bold",
    textDecoration: "underline"
  },
  loc: {
    textAlign: "right"
  },
  role: {
    textAlign: "left"
  },
  dates: {
    textAlign: "right"
  }
});

class Experience extends React.Component {
  state = {
    expand: false,
    jobs: jobs
  };

  handleClick = () => {
    this.setState({ expand: !this.state.expand });
  };
  handleClick2 = e => {
    this.setState({ [e]: !this.state[e] });
  };
  renderDuties = duties => {
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
            <ListItemIcon fontSize="small">
              <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary={duty} />
          </ListItem>
        </div>
      );
    });
  };
  renderSections() {
    const { classes } = this.props;
    return this.state.jobs.positions.map((item, index) => {
      return (
        <List>
          <ListItem button onClick={this.handleClick2.bind(this, index)}>
            <Grid container spacing={1} className={classes.desc}>
              <Grid item xs={9} className={classes.place}>
                <Typography>{item.institution}</Typography>
              </Grid>
              <Grid item xs={3} className={classes.loc}>
                <Typography>{item.location}</Typography>
              </Grid>
              <Grid item xs={6} className={classes.role}>
                <Typography>{item.role}</Typography>
              </Grid>
              <Grid item xs={6} className={classes.dates}>
                <Typography>
                  {item.start_date} to{" "}
                  {item.end_date == null ? "Present" : item.end_date}
                </Typography>
              </Grid>
            </Grid>
            {this.state[index] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state[index]} timeout="auto" unmountOnExit>
            {this.renderDuties(item.responsibilities)}
          </Collapse>
        </List>
      );
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <List className={classes.root}>
        <ListItem button onClick={this.handleClick}>
          <ListItemText primary={this.state.jobs.header} />
          {this.state.expand ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.expand} timeout="auto" unmountOnExit>
          {this.renderSections()}
        </Collapse>
      </List>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Experience);
