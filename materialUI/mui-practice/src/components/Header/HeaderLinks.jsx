/* eslint-disable */
import React from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// react components for routing our app without refresh
import { Link } from 'react-router-dom';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Icon from '@material-ui/core/Icon';

// @material-ui/icons
import Apps from '@material-ui/icons/Apps';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Dns from '@material-ui/icons/Dns';
import Build from '@material-ui/icons/Build';
import ListIcon from '@material-ui/icons/List';
import People from '@material-ui/icons/People';
import Assignment from '@material-ui/icons/Assignment';
import MonetizationOn from '@material-ui/icons/MonetizationOn';
import Chat from '@material-ui/icons/Chat';
import Call from '@material-ui/icons/Call';
import ViewCarousel from '@material-ui/icons/ViewCarousel';
import AccountBalance from '@material-ui/icons/AccountBalance';
import ArtTrack from '@material-ui/icons/ArtTrack';
import ViewQuilt from '@material-ui/icons/ViewQuilt';
import LocationOn from '@material-ui/icons/LocationOn';
import Fingerprint from '@material-ui/icons/Fingerprint';
import AttachMoney from '@material-ui/icons/AttachMoney';
import Store from '@material-ui/icons/Store';
// import AccountCircle from "@material-ui/icons/AccountCircle";
import PersonAdd from '@material-ui/icons/PersonAdd';
import Layers from '@material-ui/icons/Layers';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import LineStyle from '@material-ui/icons/LineStyle';

// core components
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.jsx';
import Button from 'components/CustomButtons/Button.jsx';

import headerLinksStyle from 'assets/jss/material-kit-pro-react/components/headerLinksStyle.jsx';
// import SvgIcon from "@material-ui/icons/Apps";
// import SvgIcon from "@material-ui/icons/Apps";

function HeaderLinks({ ...props }) {
    // const preventDefault = (event) => event.preventDefault();
    const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const smoothScroll = (e, target) => {
        if (window.location.pathname === '/sections') {
            var isMobile = navigator.userAgent.match(
                /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i,
            );
            if (isMobile) {
                // if we are on mobile device the scroll into view will be managed by the browser
            } else {
                e.preventDefault();
                var targetScroll = document.getElementById(target);
                scrollGo(
                    document.documentElement,
                    targetScroll.offsetTop,
                    1250,
                );
            }
        }
    };
    const scrollGo = (element, to, duration) => {
        var start = element.scrollTop,
            change = to - start,
            currentTime = 0,
            increment = 20;

        var animateScroll = function () {
            currentTime += increment;
            var val = easeInOutQuad(currentTime, start, change, duration);
            element.scrollTop = val;
            if (currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };
        animateScroll();
    };
    var onClickSections = {};

    const { classes, dropdownHoverColor } = props;
    return (
        <List className={classes.list + ' ' + classes.mlAuto}>
            <ListItem className={classes.listItemHeader}>
                <a href="https://www.facebook.com/semin13" target="_blank">
                    <FacebookIcon fontSize="medium" />
                </a>
            </ListItem>
            <ListItem className={classes.listItemHeader}>
                <a
                    href="https://www.instagram.com/andrew_palms/"
                    target="_blank"
                >
                    <InstagramIcon fontSize="medium" />
                </a>
            </ListItem>

            <ListItem className={classes.listItemHeader}>
                <a
                    href="https://www.linkedin.com/in/andrii-somin/"
                    target="_blank"
                >
                    <LinkedInIcon fontSize="medium" />
                </a>
            </ListItem>
        </List>
    );
}

HeaderLinks.defaultProps = {
    hoverColor: 'primary',
};

HeaderLinks.propTypes = {
    dropdownHoverColor: PropTypes.oneOf([
        'dark',
        'primary',
        'info',
        'success',
        'warning',
        'danger',
        'rose',
    ]),
};

export default withStyles(headerLinksStyle)(HeaderLinks);
