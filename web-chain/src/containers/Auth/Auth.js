import React, { Component } from 'react';
import classes from './Auth.module.scss';
import Button from '../../components/UI/Button/Button';

class Auth extends Component {
    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Authorization</h1>

                    <form>
                        <input type="text" />
                        <input type="text" />

                        <Button type="success" onClick={this.loginHandler}>
                            Sign In
                        </Button>
                        <Button type="primary" onClick={this.registerHandler}>
                            Regisrtation
                        </Button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Auth;
