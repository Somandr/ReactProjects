import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui icons
// core components
import Card from '../../components/Card/Card';
import CardBody from '../../components/Card/CardBody';
import CardHeader from '../../components/Card/CardHeader';
import CardFooter from '../../components/Card/CardFooter';
import Button from '../../components/CustomButtons/Button';

import cardsStyle from '../../assets/jss/material-kit-pro-react/views/componentsSections/sectionCards';

const style = {
    ...cardsStyle,
    // cardBackground: {
    //     backgroundColor: 'deepskyblue',
    // },
};
const useStyles = makeStyles(style);

export default function CardExampleCardProfile() {
    const classes = useStyles();
    return (
        <Card
            profile
            style={{ maxWidth: '360px' }}
            className={classes.cardBackground}
        >
            <CardHeader image>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                        src="https://images.unsplash.com/photo-1492447273231-0f8fecec1e3a?auto=format&fit=crop&w=334&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
                        alt="..."
                    />
                </a>
                <div
                    className={classes.coloredShadow}
                    style={{
                        backgroundImage: `url(https://images.unsplash.com/photo-1492447273231-0f8fecec1e3a?auto=format&fit=crop&w=334&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)`,
                        opacity: '1',
                    }}
                />
            </CardHeader>
            <CardBody>
                <h4 className={classes.cardTitle}>Alec Thompson</h4>
                <h6
                    className={`${classes.cardCategory} ${classes.cardDescription}`}
                >
                    Frontend Developer
                </h6>
            </CardBody>
            <CardFooter profile className={classes.justifyContentCenter}>
                <Button justIcon round color="twitter">
                    <i className="fab fa-twitter" />
                </Button>
                <Button justIcon round color="facebook">
                    <i className="fab fa-facebook" />
                </Button>
                <Button justIcon round color="google">
                    <i className="fab fa-google" />
                </Button>
            </CardFooter>
        </Card>
    );
}
