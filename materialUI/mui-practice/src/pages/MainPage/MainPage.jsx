import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite';
// core components
import Header from '../../components/Header/Header.jsx';
import HeaderLinks from '../../components/Header/HeaderLinks.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import GridContainer from '../../components/Grid/GridContainer.jsx';
import GridItem from '../../components/Grid/GridItem.jsx';
import Parallax from '../../components/Parallax/Parallax.jsx';
// sections for this page
import SectionPills from './Sections/SectionPills.jsx';
import SectionInterested from './Sections/SectionInterested.jsx';
import SectionImage from './Sections/SectionImage.jsx';
import SubscribeLine from './Sections/SubscribeLine.jsx';

import ProfileCard from '../../views/components/ProfileCard';

import blogPostsPageStyle from '../../assets/jss/material-kit-pro-react/views/blogPostsPageStyle.jsx';

class MainPage extends React.Component {
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
            change =
                to - start + document.getElementById('home').offsetTop,
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
        const { classes } = this.props;
        return (
            <div id="home" className="cd-section">
                <Header
                    brand="ANDREW SOMIN"
                    // links={<HeaderLinks dropdownHoverColor="info" />}
                    fixed
                    color="transparent"
                    changeColorOnScroll={{
                        height: 400,
                        color: 'info',
                    }}
                />
                <Parallax
                    image={require('assets/img/bg10.jpg')}
                    filter="dark"
                    small
                >
                    <div className={classes.container}>
                        <GridContainer justify="center">
                            <GridItem
                                xs={12}
                                sm={12}
                                md={8}
                                className={classes.textCenter}
                            >
                                <h2 className={classes.title}>
                                    A Place for Entrepreneurs to Share and
                                    Discover New Stories
                                </h2>
                            </GridItem>
                        </GridContainer>
                    </div>
                </Parallax>
                <div className={classes.main}>
                    <div className={classes.container}>
                        <ProfileCard />
                    </div>
                </div>

                {/* Footer */}
                <Footer
                    id="footer"
                    className="cd-section"
                    content={
                        <div>
                            <div className={classes.left}>
                                <List className={classes.list}>
                                    <ListItem className={classes.inlineBlock}>
                                        <a
                                            href="https://www.creative-tim.com/"
                                            className={classes.block}
                                        >
                                            Creative Tim
                                        </a>
                                    </ListItem>
                                    <ListItem className={classes.inlineBlock}>
                                        <a
                                            href="https://www.creative-tim.com/presentation"
                                            className={classes.block}
                                        >
                                            About us
                                        </a>
                                    </ListItem>
                                    <ListItem className={classes.inlineBlock}>
                                        <a
                                            href="//blog.creative-tim.com/"
                                            className={classes.block}
                                        >
                                            Blog
                                        </a>
                                    </ListItem>
                                    <ListItem className={classes.inlineBlock}>
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
                                &copy; {1900 + new Date().getYear()} , made with{' '}
                                <Favorite className={classes.icon} /> by{' '}
                                <a href="https://www.creative-tim.com">
                                    Creative Tim
                                </a>{' '}
                                for a better web.
                            </div>
                        </div>
                    }
                />
                {/* Vertical Nav */}
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
                                <span className="cd-label">Notifications</span>
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
                                <span className="cd-label">Content Areas</span>
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
                                <span className="cd-label">Morphing Cards</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#footer"
                                data-number="9"
                                className=""
                                onClick={(e) => {
                                    e.preventDefault();
                                    this.smoothScroll('footer');
                                }}
                            >
                                <span className="cd-dot" />
                                <span className="cd-label">Footer</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default withStyles(blogPostsPageStyle)(MainPage);
