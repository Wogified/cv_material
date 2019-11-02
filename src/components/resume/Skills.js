import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';



// Resource imports
import { skills } from "../../resources/resume.json";

const renderSections = items => {
    const classes = myStyles();
    return items.map(item => {
        return (
            <div >
                <Divider />
                <div className={classes.place}>
                    {item.desc}
                </div>
                <Grid container spacing={0} className={classes.boot}>
                    {renderDuties(item.list)}
                </Grid>
            </div>
        );
    });
};

const renderDuties = skills => {
    const classes = myStyles();
    return skills.map(skill => {
        return (
            <Grid item xs={3}>
                <Paper className={classes.paper}>{skill}</Paper>
            </Grid>
        );
    });
}

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
                    <Typography className={classes.heading}>
                        {skills.header}
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.details}>
                    <Typography>
                        {renderSections(skills.detail)}
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    )
}

export default Skills;



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
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
    },
}));

const myStyles = makeStyles(theme => ({
    boot: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    place: {
        textAlign: 'left',
        fontWeight: 'bold',
        textDecoration: 'underline'
    },
    paper: {
        padding: theme.spacing(3),
        margin: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));