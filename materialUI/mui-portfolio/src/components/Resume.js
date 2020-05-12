import React from 'react';
import { Typography, Box } from '@material-ui/core';
import Navbar from './Navbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        background: '#233',
    },
    timeLine: {
        position: 'relative',
        padding: '1rem',
        margin: '0 auto',
        '&:before': {
            content: '""',
            position: 'absolute',
            height: '100%',
            border: '1px solid gold',
            right: '40px',
            top: 0,
        },
        '&:after': {
            content: '""',
            display: 'table',
            clear: 'both',
        },
        [theme.breakpoints.up('md')]: {
            padding: '2rem',
            '&:before': {
                left: 'calc(50% - 1px)',
                right: 'auto',
            },
        },
    },
    timeLineItem: {
        padding: '1rem',
        borderBottom: '2px solid gold',
        position: 'relative',
        margin: '1rem 3rem 1rem 1rem',
        clear: 'both',
        '&:after': {
            content: '""',
            position: 'absolute',
        },
        '&:before': {
            content: '""',
            position: 'absolute',
            right: '-0.625rem',
            top: 'calc(50%-5px)',
            borderStyle: 'solid',
            borderColor: 'gold gold transparent transparent',
            borderWidth: '0.625rem',
            trnasform: 'rotate(45deg)',
        },
        [theme.breakpoints.up('md')]: {
            width: '44%',
            margin: '1rem',
            '&:nth-of-type(2n)': {
                float: 'right',
                margin: '1rem',
                borderColor: 'silver',
            },
            '&:nth-of-type(2n):before': {
                right: 'auto',
                left: '-0.625rem',
                borderColor: 'transperent transperent gold gold',
            },
        },
    },
    timeLineYear: {
        textAlign: 'center',
        maxWidth: '9.375rem',
        margin: '0 3rem 0 auto',
        fontSize: '1.8rem',
        background: 'gold',
        color: 'white',
        lineHeight: 1,
        padding: '0.5rem 0 1rem',
        '&:before': {
            display: 'none',
        },
        [theme.breakpoints.up('md')]: {
            textAlign: 'center',
            margin: '0 auto',
            '&:nth-of-type(2n)': {
                float: 'none',
                margin: '0 auto',
            },
            '&:nth-of-type(2n):before': {
                display: 'none',
            },
        },
    },
    heading: {
        color: 'gold',
        padding: '3rem 0',
        textTransform: 'uppercase',
    },
    subHeading: {
        color: 'white',
        padding: '0',
        textTransform: 'uppercase',
    },
}));

const Resume = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <Box component="header" className={classes.mainContainer}>
                <Typography
                    variant="h4"
                    align="center"
                    className={classes.heading}
                >
                    Resume
                </Typography>

                <Box component="div" className={classes.timeLine}>
                    <Typography
                        className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                        variant="h2"
                    >
                        2013
                    </Typography>

                    <Box component="div" className={classes.timeLineItem}>
                        <Typography
                            className={classes.subHeading}
                            variant="h5"
                            align="center"
                        >
                            web design
                        </Typography>
                        <Typography
                            // className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                            style={{ color: 'gold' }}
                            variant="body1"
                            align="center"
                        >
                            compony name where working
                        </Typography>
                        <Typography
                            // className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                            style={{ color: 'silver' }}
                            variant="subtitle1"
                            align="center"
                        >
                            Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                            Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                            Lorem Lorem Lorem Lorem Lorem Lorem
                        </Typography>
                    </Box>

                    <Typography
                        className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                        variant="h2"
                    >
                        2014
                    </Typography>

                    <Box component="div" className={classes.timeLineItem}>
                        <Typography
                            className={classes.subHeading}
                            variant="h5"
                            align="center"
                        >
                            HTML & CSS
                        </Typography>
                        <Typography
                            // className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                            style={{ color: 'gold' }}
                            variant="body1"
                            align="center"
                        >
                            compony name where working
                        </Typography>
                        <Typography
                            // className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                            style={{ color: 'silver' }}
                            variant="subtitle1"
                            align="center"
                        >
                            Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                            Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                            Lorem Lorem Lorem Lorem Lorem Lorem
                        </Typography>
                    </Box>

                    <Typography
                        className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                        variant="h2"
                    >
                        2015
                    </Typography>

                    <Box component="div" className={classes.timeLineItem}>
                        <Typography
                            className={classes.subHeading}
                            variant="h5"
                            align="center"
                        >
                            JavaScript
                        </Typography>
                        <Typography
                            // className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                            style={{ color: 'gold' }}
                            variant="body1"
                            align="center"
                        >
                            compony name where working
                        </Typography>
                        <Typography
                            // className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                            style={{ color: 'silver' }}
                            variant="subtitle1"
                            align="center"
                        >
                            Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                            Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                            Lorem Lorem Lorem Lorem Lorem Lorem
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Resume;
