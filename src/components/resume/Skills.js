import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

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
import { skills } from "../../resources/resume.json";

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
  },
  boot: {
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
});

// const renderSections = items => {
//   const classes = myStyles();
//   const useDivider = index => {
//     if (index > 0) {
//       return <Divider />;
//     }
//   };
//   return items.map((item, index) => {
//     return (
//       <div className={classes.root}>
//         {useDivider(index)}
//         <Paper className={classes.skillGroup}>
//           <Typography className={classes.header} variant="h5" color="primary">
//             {item.desc}
//           </Typography>
//           <Grid container spacing={0} className={classes.boot}>
//             {renderDuties(item.list)}
//           </Grid>
//         </Paper>
//       </div>
//     );
//   });
// };

// const renderDuties = skills => {
//   const classes = myStyles();
//   return skills.map(skill => {
//     return (
//       <Grid item xs={3}>
//         <Paper className={classes.paper}>
//           <Typography>{skill}</Typography>
//         </Paper>
//       </Grid>
//     );
//   });
// };

class Skills extends React.Component {
  state = {
    expand: false,
    skills: skills
  };

  handleClick = () => {
    this.setState({ expand: !this.state.expand });
  };
  handleClick2 = e => {
    this.setState({ [e]: !this.state[e] });
  };
  renderDuties = duties => {
    const { classes } = this.props;

    const useDivider = index => {
      if (index > 0) {
        return <Divider />;
      }
    };
    return duties.map((duty, index) => {
      return (
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Typography>{duty}</Typography>
          </Paper>
        </Grid>
      );
    });
  };
  renderSections() {
    const { classes } = this.props;
    return this.state.skills.detail.map((item, index) => {
      return (
        <List>
          <ListItem button onClick={this.handleClick2.bind(this, index)}>
            <ListItemText inset primary={item.desc} />

            {this.state[index] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state[index]} timeout="auto" unmountOnExit>
            <Grid container spacing={0} className={classes.boot}>
              {this.renderDuties(item.list)}
            </Grid>
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
          <ListItemText primary={this.state.skills.header} />
          {this.state.expand ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.expand} timeout="auto" unmountOnExit>
          {this.renderSections()}
        </Collapse>
      </List>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Skills);
