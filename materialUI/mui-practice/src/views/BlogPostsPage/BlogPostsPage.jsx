import React, { Component } from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite';
// core components
import Header from 'components/Header/Header.jsx';
import HeaderLinks from 'components/Header/HeaderLinks.jsx';
import Footer from 'components/Footer/Footer.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Parallax from 'components/Parallax/Parallax.jsx';
// sections for this page
import SectionPills from './Sections/SectionPills.jsx';
import SectionInterested from './Sections/SectionInterested.jsx';
import SectionImage from './Sections/SectionImage.jsx';
import SubscribeLine from './Sections/SubscribeLine.jsx';

import blogPostsPageStyle from 'assets/jss/material-kit-pro-react/views/blogPostsPageStyle.jsx';
import { Typography } from '@material-ui/core';

import Dashboard from '@material-ui/icons/Dashboard';
import Schedule from '@material-ui/icons/Schedule';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CallIcon from '@material-ui/icons/Call';
import Card from 'components/Card/Card.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CardBody from 'components/Card/CardBody.jsx';

import Warning from 'components/Typography/Warning.jsx';
// import Rose from 'components/Typography/Rose.jsx';
// import Info from 'components/Typography/Info.jsx';

import color1 from 'assets/img/examples/color1.jpg';
// import color2 from 'assets/img/examples/color2.jpg';
// import color3 from 'assets/img/examples/color3.jpg';

import Face from '@material-ui/icons/Face';
import Chat from '@material-ui/icons/Chat';
import Build from '@material-ui/icons/Build';
import CustomTabs from 'components/CustomTabs/CustomTabs.jsx';
import NavPills from 'components/NavPills/NavPills.jsx';
import Table from 'components/Table/Table.jsx';

class BlogPostsPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;

        var href = window.location.href.substring(
            window.location.href.lastIndexOf('#') + 1,
        );
        if (window.location.href.lastIndexOf('#') > 0)
            document.getElementById(href).scrollIntoView();
        window.addEventListener('scroll', this.updateView);
        this.updateView();
    }
    componentDidUpdate() {
        var href = window.location.href.substring(
            window.location.href.lastIndexOf('#') + 1,
        );
        document.getElementById(href).scrollIntoView();
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.updateView);
    }
    easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    }
    updateView() {
        var contentSections = document.getElementsByClassName('cd-section');
        var navigationItems = document
            .getElementById('cd-vertical-nav')
            .getElementsByTagName('a');

        for (let i = 0; i < contentSections.length; i++) {
            var activeSection =
                parseInt(navigationItems[i].getAttribute('data-number'), 10) -
                1;
            if (
                contentSections[i].offsetTop -
                    window.innerHeight / 2 +
                    document.getElementById('home').offsetTop <
                    window.pageYOffset &&
                contentSections[i].offsetTop +
                    contentSections[i].scrollHeight -
                    window.innerHeight / 2 +
                    document.getElementById('home').offsetTop >
                    window.pageYOffset
            ) {
                navigationItems[activeSection].classList.add('is-selected');
            } else {
                navigationItems[activeSection].classList.remove('is-selected');
            }
        }
    }
    smoothScroll(target) {
        var targetScroll = document.getElementById(target);
        this.scrollTo(document.documentElement, targetScroll.offsetTop, 900);
    }
    scrollTo(element, to, duration) {
        var start = element.scrollTop,
            change = to - start + document.getElementById('home').offsetTop,
            currentTime = 0,
            increment = 20;

        var animateScroll = function () {
            currentTime += increment;
            var val = this.easeInOutQuad(currentTime, start, change, duration);
            element.scrollTop = val;
            if (currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        }.bind(this);
        animateScroll();
    }

    render() {
        const { classes, ...rest } = this.props;
        const name = <Typography variant="h5">Andrew Somin</Typography>;
        const age = 1900 + new Date().getYear() - 1984;
        const isAge = age ? (
            <>
                <span className={classes.profileInfoContentAdd}>Age:</span>{' '}
                <span>{age}</span>
            </>
        ) : (
            <>
                <span className={classes.profileInfoContentAdd}>
                    Date of birth:
                </span>{' '}
                <span>13 February 1984</span>
            </>
        );
        const headerText = (
            <Typography className={classes.opacity} variant="h5">
                "The only way that we can live is if we grow. The only way we
                can grow is if we change. The only way we can change is if we
                learn. The only way we can learn is if we are exposed. And the
                only way that we are exposed is if we throw ourselves into the
                open.” — C. Joybell
            </Typography>
        );
        const sectionTitle = title => (
            <GridContainer>
                <GridItem
                    xs={12}
                    sm={12}
                    md={12}
                    className={
                        classes.textCenter + ' ' + classes.sectionTextTitle
                    }
                >
                    <Typography variant="h3">{ title }</Typography>
                </GridItem>
            </GridContainer>
        );

        return (
            <div className="cd-section" {...rest}>
                <div id="home">
                    <Header
                        brand={name}
                        links={<HeaderLinks dropdownHoverColor="info" />}
                        fixed
                        color="transparent"
                        changeColorOnScroll={{
                            height: 100,
                            color: 'info',
                        }}
                    />
                    <Parallax
                        image={require('assets/img/bg10.jpg')}
                        filter="dark"
                        small
                    >
                        <div className={classes.container}>
                            <GridContainer>
                                <GridItem
                                    xs={12}
                                    sm={12}
                                    md={8}
                                    className={classes.textCenter}
                                >
                                    <div className={classes.title}>
                                        {headerText}
                                    </div>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={4}>
                                    <div className={classes.iframeContainer}>
                                        <iframe
                                            height="250"
                                            src="https://www.youtube.com/embed/IN6QnLpVEPI"
                                            frameBorder="0"
                                            allow="encrypted-media"
                                            allowFullScreen="true"
                                            title="Andrew Somin"
                                        />
                                    </div>
                                </GridItem>
                            </GridContainer>
                        </div>
                    </Parallax>

                    <div className={classes.main}>
                        <div className={classes.section}>
                            <div className={classes.container}>
                                {sectionTitle('Profile')}
                                {/* <div id="nav-tabs"> */}
                                <GridContainer>
                                    <GridItem xs={12} sm={4} md={4}></GridItem>
                                    <GridItem xs={12} sm={8} md={8}>
                                        <NavPills
                                            color="primary"
                                            horizontal={{
                                                tabsGrid: {
                                                    xs: 12,
                                                    sm: 3,
                                                    md: 3,
                                                },
                                                contentGrid: {
                                                    xs: 12,
                                                    sm: 9,
                                                    md: 9,
                                                },
                                            }}
                                            tabs={[
                                                {
                                                    tabButton: 'Info',
                                                    tabIcon: AccountCircleIcon,
                                                    tabContent: (
                                                        <GridContainer>
                                                            <GridItem
                                                                xs={12}
                                                                sm={12}
                                                                md={12}
                                                            >
                                                                {' '}
                                                                <Typography
                                                                    className={
                                                                        classes.profileInfoContent
                                                                    }
                                                                    variant="h5"
                                                                >
                                                                    {isAge}
                                                                </Typography>
                                                            </GridItem>
                                                            <GridItem
                                                                xs={12}
                                                                sm={12}
                                                                md={12}
                                                            >
                                                                {' '}
                                                                <Typography
                                                                    className={
                                                                        classes.profileInfoContent
                                                                    }
                                                                    variant="h5"
                                                                    color="access"
                                                                >
                                                                    <span
                                                                        className={
                                                                            classes.profileInfoContentAdd
                                                                        }
                                                                    >
                                                                        Material
                                                                        status:
                                                                    </span>{' '}
                                                                    not married
                                                                </Typography>
                                                            </GridItem>
                                                            <GridItem
                                                                xs={12}
                                                                sm={12}
                                                                md={12}
                                                            >
                                                                {' '}
                                                                <Typography
                                                                    className={
                                                                        classes.profileInfoContent
                                                                    }
                                                                    variant="h5"
                                                                    color="access"
                                                                >
                                                                    <span
                                                                        className={
                                                                            classes.profileInfoContentAdd
                                                                        }
                                                                    >
                                                                        Change
                                                                        of
                                                                        location:
                                                                    </span>{' '}
                                                                    depending on
                                                                    options
                                                                </Typography>
                                                            </GridItem>
                                                        </GridContainer>
                                                    ),
                                                },
                                                {
                                                    tabButton: 'Contacts',
                                                    tabIcon: CallIcon,
                                                    tabContent: (
                                                        <span>
                                                            <p>
                                                                Efficiently
                                                                unleash
                                                                cross-media
                                                                information
                                                                without
                                                                cross-media
                                                                value. Quickly
                                                                maximize timely
                                                                deliverables for
                                                                real-time
                                                                schemas.
                                                            </p>
                                                            <br />
                                                            <p>
                                                                Dramatically
                                                                maintain
                                                                clicks-and-mortar
                                                                solutions
                                                                without
                                                                functional
                                                                solutions.
                                                                Dramatically
                                                                visualize
                                                                customer
                                                                directed
                                                                convergence
                                                                without
                                                                revolutionary
                                                                ROI.
                                                                Collaboratively
                                                                administrate
                                                                empowered
                                                                markets via
                                                                plug-and-play
                                                                networks.
                                                                Dynamically
                                                                procrastinate
                                                                B2C users after
                                                                installed base
                                                                benefits.
                                                            </p>
                                                        </span>
                                                    ),
                                                },
                                            ]}
                                        />
                                    </GridItem>
                                </GridContainer>
                                {/* </div> */}
                            </div>
                        </div>

                        <div className={classes.container}>
                            {sectionTitle('My Works')}
                            <SectionPills />
                            <SectionInterested />
                        </div>
                        <SectionImage />
                        <SubscribeLine />
                    </div>
                    <nav id="cd-vertical-nav">
                        <ul>
                            <li>
                                <a
                                    href="#home"
                                    data-number="1"
                                    className=""
                                    onClick={(e) => {
                                        e.preventDefault();
                                        this.smoothScroll('home');
                                    }}
                                >
                                    <span className="cd-dot" />
                                    <span className="cd-label">Home</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#navigation"
                                    data-number="2"
                                    className=""
                                    onClick={(e) => {
                                        e.preventDefault();
                                        this.smoothScroll('navigation');
                                    }}
                                >
                                    <span className="cd-dot" />
                                    <span className="cd-label">Navigation</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#notifications"
                                    data-number="3"
                                    className=""
                                    onClick={(e) => {
                                        e.preventDefault();
                                        this.smoothScroll('notifications');
                                    }}
                                >
                                    <span className="cd-dot" />
                                    <span className="cd-label">
                                        Notifications
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#footers"
                                    data-number="4"
                                    className=""
                                    onClick={(e) => {
                                        e.preventDefault();
                                        this.smoothScroll('footers');
                                    }}
                                >
                                    <span className="cd-dot" />
                                    <span className="cd-label">Footers</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#typography"
                                    data-number="5"
                                    className=""
                                    onClick={(e) => {
                                        e.preventDefault();
                                        this.smoothScroll('typography');
                                    }}
                                >
                                    <span className="cd-dot" />
                                    <span className="cd-label">Typography</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contentAreas"
                                    data-number="6"
                                    className=""
                                    onClick={(e) => {
                                        e.preventDefault();
                                        this.smoothScroll('contentAreas');
                                    }}
                                >
                                    <span className="cd-dot" />
                                    <span className="cd-label">
                                        Content Areas
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#cards"
                                    data-number="7"
                                    className=""
                                    onClick={(e) => {
                                        e.preventDefault();
                                        this.smoothScroll('cards');
                                    }}
                                >
                                    <span className="cd-dot" />
                                    <span className="cd-label">Cards</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#morphingCards"
                                    data-number="8"
                                    className=""
                                    onClick={(e) => {
                                        e.preventDefault();
                                        this.smoothScroll('morphingCards');
                                    }}
                                >
                                    <span className="cd-dot" />
                                    <span className="cd-label">
                                        Morphing Cards
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#javascriptComponents"
                                    data-number="9"
                                    className=""
                                    onClick={(e) => {
                                        e.preventDefault();
                                        this.smoothScroll(
                                            'javascriptComponents',
                                        );
                                    }}
                                >
                                    <span className="cd-dot" />
                                    <span className="cd-label">Javascript</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <Footer
                        content={
                            <div>
                                <div className={classes.left}>
                                    <List className={classes.list}>
                                        <ListItem
                                            className={classes.inlineBlock}
                                        >
                                            <a
                                                href="https://www.creative-tim.com/"
                                                className={classes.block}
                                            >
                                                Creative Tim
                                            </a>
                                        </ListItem>
                                        <ListItem
                                            className={classes.inlineBlock}
                                        >
                                            <a
                                                href="https://www.creative-tim.com/presentation"
                                                className={classes.block}
                                            >
                                                About us
                                            </a>
                                        </ListItem>
                                        <ListItem
                                            className={classes.inlineBlock}
                                        >
                                            <a
                                                href="//blog.creative-tim.com/"
                                                className={classes.block}
                                            >
                                                Blog
                                            </a>
                                        </ListItem>
                                        <ListItem
                                            className={classes.inlineBlock}
                                        >
                                            <a
                                                href="https://www.creative-tim.com/license"
                                                className={classes.block}
                                            >
                                                Licenses
                                            </a>
                                        </ListItem>
                                    </List>
                                </div>
                                <div className={classes.right}>
                                    &copy; {1900 + new Date().getYear()} , made
                                    with <Favorite className={classes.icon} />{' '}
                                    by{' '}
                                    <a href="https://www.creative-tim.com">
                                        Andrew Somin
                                    </a>{' '}
                                    for a better web.
                                </div>
                            </div>
                        }
                    />
                </div>
            </div>
        );
    }
}

export default withStyles(blogPostsPageStyle)(BlogPostsPage);
