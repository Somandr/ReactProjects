import React, { Component } from 'react';

export default class ErrorBoundary extends Component {

    state = {
        hasError: false,
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) {

        return (

            <div>
                <h1 style={{color: 'red'}}>Something went wrong</h1>
            </div>
        )
        }
        return this.props.children
    }
}
