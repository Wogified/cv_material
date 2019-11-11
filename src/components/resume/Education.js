import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";

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
import AccountBalanceRoundedIcon from "@material-ui/icons/AccountBalanceRounded";
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
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  details: {
    display: "flex",
    flexDirection: "column",
    justify: "space-between"
  }
});

class Education extends React.Component {
  componentDidMount() {
    console.log(this.state.expand);
  }
  state = {
    expand: false,
    school: school
  };
  // classes = useStyles();

  handleClick = () => {
    console.log(this.state.expand);
    this.setState({ expand: !this.state.expand });
  };
  handleClick2 = e => {
    console.log(this.state);
    this.setState({ [e]: !this.state[e] });
  };

  renderSections() {
    const { classes } = this.props;
    return this.state.school.degrees.map((item, index) => {
      return (
        <div>
          <ListItem button onClick={this.handleClick2.bind(this, index)}>
            <ListItemIcon>
              <AccountBalanceRoundedIcon />
            </ListItemIcon>
            <ListItemText primary={item.place} />
            {this.state[index] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state[index]} timeout="auto" unmountOnExit>
            poop
          </Collapse>
        </div>
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
