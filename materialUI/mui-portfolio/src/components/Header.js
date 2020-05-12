import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typed from 'react-typed';
import { Typography, Avatar, Grid, Box } from '@material-ui/core';
import photo from '../assets/img/avatar.png';

// CSS STYLES
const useStyles = makeStyles((theme) => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1),
    },
    title: {
        color: 'gold',
    },
    subtitle: {
        color: 'silver',
        marginBottom: '3rem',
    },
    typedContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100vw',
        textAlign: 'center',
        zIndex: 1,
    },
}));

const Header = () => {
    const classes = useStyles();
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar
                    className={classes.avatar}
                    src={photo}
                    alt="Logo Photo"
                />
            </Grid>
            <Typography className={classes.title} variant="h4">
                <Typed strings={['Andrew']} typeSpeed={100} />
            </Typography>
            <br />
            <Typography className={classes.subtitle} variant="h5">
                <Typed
                    strings={['Design', 'Web Development', 'Frontend']}
                    typeSpeed={100}
                    backSpeed={60}
                    loop
                />
            </Typography>
        </Box>
    );
};

export default Header;
