import React, { Component } from 'react';
import Auxiliary from '../hoc/Auxiliary';

export default class Counter extends Component {
    state = {
        counter: 0,
    };

    addCounter = () => {
        // this.setState({
        //     counter: this.state.counter + 1,
        // });
        this.setState(prevState => {
            return {
                counter: prevState.counter + 1,
            };
        });
    };

    componentDidMount() {
        console.log('Counter - componentDidMount');
        console.log(this.state);
    }

    render() {
        console.log(this.state);
        return (
            <>
                <h2>Counter {this.state.counter}</h2>
                <button onClick={this.addCounter}>+</button>
                <button
                    onClick={() =>
                        this.setState({ counter: this.state.counter - 1 })
                    }
                >
                    -
                </button>
            </>
        );
        // return [
        //         <h2>Counter {this.state.counter}</h2>
        //         <button onClick={this.addCounter}>+</button>
        //         <button
        //             onClick={() =>
        //                 this.setState({
        //                     counter: this.state.counter - 1,
        //                 })
        //             }
        //         >
        //             -
        //         </button>
        // ]
    }
}
