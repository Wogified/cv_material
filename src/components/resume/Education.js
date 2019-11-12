import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
// Resource imports
import { school } from "../../resources/resume.json";

const styles = theme => ({
  toot: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    paddingBottom: "0px",
    paddingTop: "0px",
    color: theme.palette.text.primary
  },
  desc: {
    flexGrow: 1,
    paddingRight: theme.spacing(6)
  },
  place: {
    textAlign: "left",
    fontWeight: "bold",
    textDecoration: "underline"
  },
  dates: {
    textAlign: "right"
  },
  deg: {
    textAlign: "left"
  },
  gpa: {
    textAlign: "right"
  }
});

class Education extends React.Component {
  state = {
    expand: false,
    school: school
  };

  handleClick = () => {
    this.setState({ expand: !this.state.expand });
  };

  renderSections() {
    const { classes } = this.props;
    return this.state.school.degrees.map((item, index) => {
      return (
        <List>
          <ListItem>
            <Grid container spacing={1} className={classes.desc}>
              <Grid item xs={6} className={classes.place}>
                <Typography>{item.place}</Typography>
              </Grid>
              <Grid item xs={6} className={classes.dates}>
                <Typography>
                  {item.start} to {item.finish}
                </Typography>
              </Grid>

              <Grid item xs={6} className={classes.deg}>
                <Typography>{item.degree}</Typography>
              </Grid>
              <Grid item xs={6} className={classes.gpa}>
                <Typography>GPA: {item.gpa}</Typography>
              </Grid>
            </Grid>
          </ListItem>
        </List>
      );
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <List className={classes.toot}>
        <ListItem button onClick={this.handleClick}>
          <ListItemText primary={school.header} />
          {this.state.expand ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.expand} timeout="auto" unmountOnExit>
          {this.renderSections()}
        </Collapse>
      </List>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Education);
