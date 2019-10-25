import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from '@material-ui/core/Grid';

// Resource imports
import { school } from "../../resources/resume.json";

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
    }

}));

const myStyles = makeStyles(theme => ({
    boot: {
        flexGrow: 1,
        padding: theme.spacing(1)
    },
    place: {
        textAlign: 'left',
        fontWeight: 'bold'
    },
    date: {
        textAlign: 'right'
    },
    deg: {
        textAlign: 'left'
    },
    gpa: {
        textAlign: 'right'
    }

}));


const renderSections = degrees => {
    const classes = myStyles();
    return degrees.map(item => {
        return (
            <div className={classes.boot}>
                <Grid container spacing={0}>
                    <Grid item xs={6} className={classes.place}>
                        {item.place}
                    </Grid>
                    <Grid item xs={6} className={classes.date}>
                        {item.finish_date}
                    </Grid>
                    <Grid item xs={6} className={classes.deg}>
                        {item.degree}
                    </Grid>
                    <Grid item xs={6} className={classes.gpa}>
                        GPA: {item.gpa}
                    </Grid>
                </Grid>
            </div>

        );
    });
};

const Education = () => {
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
                        {school.header}
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.details}>
                    <Typography>
                        {renderSections(school.degrees)}
                    </Typography>

                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    )
}

export default Education;