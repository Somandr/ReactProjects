import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { TextField, Typography, Button, Grid, Box } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Navbar from './Navbar';

const useStyles = makeStyles((theme) => ({
    form: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute',
    },
    button: {
        marginTop: '1rem',
        color: 'gold',
        borderColor: 'gold',
    },
}));

const InputField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'gold',
        },
        '& label': {
            color: 'silver',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'gold',
            },
            '&:hover fieldset': {
                borderColor: 'silver',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'gold',
            },
        },
    },
})(TextField);

const Contacts = () => {
    const classes = useStyles();
    return (
      <Box component="div">
        <Navbar/>
            <Grid container justify="center">
                <Box className={classes.form} component="form">
                    <Typography variant="h5" style={{color: 'gold', textAlign: 'center', textTransform: 'uppercase'}}>Hire or contact me...</Typography>
                    <InputField
                        fullWidth={true}
                        label="Name"
                        variant="outlined"
                        inputProps={{ style: { color: 'gold' } }}
                        margin="dense"
                        size="medium"
                    />
                    <br />
                    <InputField
                        fullWidth={true}
                        label="Email"
                        variant="outlined"
                        inputProps={{ style: { color: 'gold' } }}
                        margin="dense"
                        size="medium"
                    />
                    <br />
                    <InputField
                        fullWidth={true}
                        label="Company name"
                        variant="outlined"
                        inputProps={{ style: { color: 'gold' } }}
                        margin="dense"
                        size="medium"
                    />
                    <br />
                    <Button
                        className={classes.button}
                        variant="outlined"
                        fullWidth={true}
                        endIcon={<SendIcon />}
                    >
                        Contact me
                    </Button>
                </Box>
            </Grid>
        </Box>
    );
};

export default Contacts;
