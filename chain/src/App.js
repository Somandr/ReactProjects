import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Counter from './Counter/Counter';

class App extends Component {
    constructor(props) {
        console.log('App - constructor');
        super(props);

        this.state = {
            cars: [
                { name: 'Ford turbo', year: 2018 },
                { name: 'Audi s8', year: 2016 },
                { name: 'Mazda 6', year: 2010 },
            ],
            pageTitle: 'React components',
            showCars: false,
        };
    }

    toggleCarsHandler = () => {
        this.setState({
            showCars: !this.state.showCars,
        });
    };

    // changeTitleHandler = pageTitle => {
    //     this.setState({ pageTitle });
    // };

    onChangeName = (name, index) => {
        const car = this.state.cars[index];
        car.name = name;
        const cars = [...this.state.cars];
        cars[index] = car;
        this.setState({ cars });
    };

    // handleInput = event => {
    //     this.setState({
    //         pageTitle: event.target.value,
    //     });
    // };

    deleteHandler(index) {
        const cars = this.state.cars.concat();

        cars.splice(index, 1);

        this.setState({ cars });
    }

    componentWillMount() {
        console.log('App - componentWillMount');
    }

    componentDidMount() {
        console.log('App - componentDidMount');
    }

    render() {
        console.log('App - Render');
        const divStyle = {
            color: 'deeppink',
            textAlign: 'center',
        };

        const btn = {
            border: '1px solid orange',
            width: '60px',
            height: '30px',
            fontSize: '10px',
            backgroundColor: 'deepskyblue',
            color: 'white',
            outline: 'none',
            marginBottom: '20px',
            fontWeight: 'bold',
        };

        let cars = null;

        if (this.state.showCars) {
            cars = this.state.cars.map((car, index) => {
                return (
                    <ErrorBoundary key={index}>
                        <Car
                            name={car.name}
                            year={car.year}
                            onChangeName={event =>
                                this.onChangeName(event.target.value, index)
                            }
                            onDelete={this.deleteHandler.bind(this, index)}
                        />
                    </ErrorBoundary>
                );
            });
        }
        return (
            <div style={divStyle}>
                <h1>{this.props.title}</h1>
                <Counter />
                {/* <input
                    type="text"
                    onChange={this.handleInput}
                    style={{ border: '1px solid green' }}
                ></input> */}
                <button onClick={this.toggleCarsHandler} style={btn}>
                    Toggle Cars
                </button>
                <div
                    style={{
                        width: '400px',
                        margin: 'auto',
                    }}
                >
                    {cars}
                </div>
                {
                    // this.state.showCars
                    //   ? this.state.cars.map((car, index) => {
                    //         return (
                    //             <Car
                    //                 key={index}
                    //                 name={car.name}
                    //                 year={car.year}
                    //                 onChangeTitle={() =>
                    //                     this.changeTitleHandler(car.name)
                    //                 }
                    //             />
                    //         );
                    //     })
                    // : null
                    /* <Car
                    name={cars[0].name}
                    year={cars[0].year}
                    onChangeTitle={this.changeTitleHandler.bind(
                        this,
                        cars[0].name,
                    )}
                />
                <Car
                    name={cars[1].name}
                    year={cars[1].year}
                    onChangeTitle={() => this.changeTitleHandler(cars[1].name)}
                />
                <Car
                    name={cars[2].name}
                    year={cars[2].year}
                    onChangeTitle={() => this.changeTitleHandler(cars[2].name)}
                /> */
                }
            </div>
        );
    }
}

export default App;
