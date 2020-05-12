import React, { useState } from 'react';
import MobileRightMenuSlider from '@material-ui/core/Drawer';
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box,
    ListItemIcon,
} from '@material-ui/core';
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail,
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import photo from '../assets/img/avatar.png';
import { Link } from 'react-router-dom';
import Footer from './Footer';

// CSS STYLES
const useStyles = makeStyles((theme) => ({
    menuSliderContainer: {
        width: 250,
        background: '#511',
        height: '100%',
    },
    avatar: {
        dispalay: 'block',
        margin: '0.5rem auto',
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    listItem: {
        color: 'gold',
    },
}));

const menuItems = [
    {
        listIcon: <Home />,
        listText: 'Home',
        listPath: '/',
    },
    {
        listIcon: <AssignmentInd />,
        listText: 'Resume',
        listPath: '/resume',
    },
    {
        listIcon: <Apps />,
        listText: 'Portfolio',
        listPath: '/portfolio',
    },
    {
        listIcon: <ContactMail />,
        listText: 'Contacts',
        listPath: '/contacts',
    },
];

const Navbar = () => {
    const [state, setState] = useState({
        right: false,
    });

    const toggleSlider = (slider, open) => () => {
        setState({ ...state, [slider]: open });
    };

    const classes = useStyles();
    const sideList = (slider) => (
        <Box
            className={classes.menuSliderContainer}
            component="div"
            onClick={toggleSlider(slider, false)}
        >
            <Avatar className={classes.avatar} src={photo} alt="Logo Photo" />
            <Divider />
            <List>
                {menuItems.map((lsItem, key) => (
                    <ListItem button key={key} component={Link} to={lsItem.listPath}> 
                        <ListItemIcon className={classes.listItem}>
                            {lsItem.listIcon}
                        </ListItemIcon>
                        <ListItemText
                            className={classes.listItem}
                            primary={lsItem.listText}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    return (
        <>
            <Box component="nav">
                <AppBar position="static" style={{ background: '#353D13' }}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider('right', true)}>
                            <ArrowBack style={{ color: 'silver' }} />
                        </IconButton>
                        <Typography variant="h5" style={{ color: 'silver' }}>
                            Portfolio
                        </Typography>
                        <MobileRightMenuSlider
                            anchor="right"
                            open={state.right}
                            onClose={toggleSlider('right', false)}
                        >
                            { sideList('right') }
                            <Footer/>
                        </MobileRightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};

export default Navbar;
