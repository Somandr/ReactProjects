import React from 'react';
import Navbar from './Navbar';
import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from '@material-ui/core';
import affluent from '../assets/img/affluent.png';
import project2 from '../assets/img/project2.png';
import project3 from '../assets/img/project3.png';
const useStyles = makeStyles((theme) => ({
    mainContainer: {
        background: '#233',
        height: '100%',
    },
    cardContainer: {
        maxWidth: 345,
        margin: '5rem auto',
    },
}));

const Portfolio = () => {
    const classes = useStyles();
    return (
        <Box component="div" className={classes.mainContainer}>
            <Navbar />

            <Grid container justify="center">
                {/* Project1 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project Item"
                                height="140"
                                image={affluent}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 1
                                </Typography>

                                <Typography
                                    gutterBottom
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                >
                                    LoremIpsum LoremIpsum LoremIpsum LoremIpsum
                                    LoremIpsum LoremIpsum LoremIpsum LoremIpsum
                                    LoremIpsum LoremIpsum LoremIpsum LoremIpsum
                                    LoremIpsum LoremIpsum
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Live Demo
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>

                {/* Project 2 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project Item 2"
                                height="140"
                                image={project2}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 2
                                </Typography>

                                <Typography
                                    gutterBottom
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                >
                                    LoremIpsum LoremIpsum LoremIpsum LoremIpsum
                                    LoremIpsum LoremIpsum LoremIpsum LoremIpsum
                                    LoremIpsum LoremIpsum LoremIpsum LoremIpsum
                                    LoremIpsum LoremIpsum
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Live Demo
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>

                {/* Project 3 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project Item 3"
                                height="140"
                                image={project3}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 3
                                </Typography>

                                <Typography
                                    gutterBottom
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                >
                                    LoremIpsum LoremIpsum LoremIpsum LoremIpsum
                                    LoremIpsum LoremIpsum LoremIpsum LoremIpsum
                                    LoremIpsum LoremIpsum LoremIpsum LoremIpsum
                                    LoremIpsum LoremIpsum
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Live Demo
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>

                {/* Project 4 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project Item 4"
                                height="140"
                                image={affluent}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 4
                                </Typography>

                                <Typography
                                    gutterBottom
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                >
                                    LoremIpsum LoremIpsum LoremIpsum LoremIpsum
                                    LoremIpsum LoremIpsum LoremIpsum LoremIpsum
                                    LoremIpsum LoremIpsum LoremIpsum LoremIpsum
                                    LoremIpsum LoremIpsum
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Live Demo
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Portfolio;
