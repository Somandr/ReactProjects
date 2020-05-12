import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Navbar from './Navbar';
import Header from './Header';
import Particles from 'react-particles-js';

const useStyles = makeStyles({
    particlesCanva: {
        position: 'absolute',
        color: 'green',
        opacity: '0.5',
    },
});

const Home = () => {
    const classes = useStyles();

    return (
        <>
            <Navbar />
            <Header />
            <Particles
                canvasClassName={classes.particlesCanva}
                params={{
                    particles: {
                        number: {
                            value: 45,
                            density: {
                                enable: false,
                                value_area: 900,
                            },
                        },
                        shape: {
                            type: 'circle',
                            stroke: {
                                width: 1,
                                color: 'green',
                            },
                        },
                        size: {
                            value: 8,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 10,
                                size_min: 0.1,
                                sync: true,
                            },
                        },
                    },
                }}
            />
        </>
    );
};

export default Home;
