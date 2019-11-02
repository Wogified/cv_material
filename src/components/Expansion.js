import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';


// Resource imports
import { proj } from "../../resources/resume.json";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%"
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        justify: 'space-between'
    },
    summary: {
        overflow: 'hidden',
        "&:hover": {
            backgroundColor: theme.palette.primary.light
        }
    }
}));

const myStyles = makeStyles(theme => ({
    boot: {
        flexGrow: 1,
        padding: theme.spacing(1),

    },
    place: {
        textAlign: 'left',
        fontWeight: 'bold',
        textDecoration: 'underline'
    },
    date: {
        textAlign: 'right'
    },
    deg: {
        textAlign: 'left'
    },
    gpa: {
        textAlign: 'right'
    },
    bullet: {
        listStylePosition: 'outside'
    }

}));

const renderSections = projs => {
    const classes = myStyles();
    return projs.map(proj => {
        return (
            <div className={classes.boot}>
                <Grid container spacing={0}>
                    <Grid item xs={12} className={classes.place}>
                        {proj.desc}
                    </Grid>
                    <Grid item xs={12} className={classes.deg}>
                        {proj.role}
                    </Grid>
                    {renderGit(proj.links)}
                    <Grid item xs={12} >
                        <List component="nav" aria-label="main mailbox folders">
                            {renderDuties(proj.responsibilities)}
                        </List>
                    </Grid>

                </Grid>
            </div>

        );
    });
};

const Projects = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>
                        {proj.header}
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.details}>
                    <Typography>
                        {renderSections(proj.portfolio)}
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    )
}

export default Projects;