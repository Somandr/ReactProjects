import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import LinkedIn from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
    root: {
        '& .MuiBottomNavigationAction-root': {
            minWidth: 0,
            maxWidth: 250,
        },
        '& .MuiSvgIcon-root': {
            fill: 'silver',
            '&:hover': {
                fill: 'gold',
                fontSize: '1.8rem',
            },
        },
    },
});

const Footer = () => {
    const classes = useStyles();
    return (
        <BottomNavigation width="auto" style={{ background: '#4A1000' }}>
            <BottomNavigationAction
                className={classes.root}
                style={{ padding: 0 }}
                icon={<Instagram />}
            />
            <BottomNavigationAction
                className={classes.root}
                style={{ padding: 0 }}
                icon={<Facebook />}
            />
            <BottomNavigationAction
                className={classes.root}
                style={{ padding: 0 }}
                icon={<LinkedIn />}
            />
        </BottomNavigation>
    );
};

export default Footer;
