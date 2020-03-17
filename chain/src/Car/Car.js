import React from 'react';
import withClass from '../hoc/withClass';
import PropTypes from 'prop-types';


class Car extends React.Component {
    // componentWillReceiveProps(nextProps) {
    //     console.log('Car - componentWillReceiveProps', nextProps);
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('Car - shouldComponentUpdate', nextProps, nextState);
    //     return nextProps.name.trim() !== this.props.name.trim();
    // }

    // componentWillUpdate(nextProps, nextState) {
    //     console.log('Car - componentWillUpdate', nextProps, nextState);
    // }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     console.log('Car - getDerivedStateFromProps', nextProps, prevState);
    //     return prevState
    // }

    // componentDidUpdate() {
    //     console.log('Car - componentDidUpdate');
    // }

    // getSnapshotBeforeUpdate() {
    //     console.log('Car - getSnapshotBeforeUpdate');
    // }

    // componentWillMount() {
    //     console.log('Car - componentWillMount');
    // }

    // componentWillUnmount() {
    //     console.log('Car - componentWillUnmount');
    // }

    render() {
        console.log('Car - render');
        // if (Math.random() > 0.7) {
        //     throw new Error('Car random failed');
        // }

        return (
            <div
                style={{
                    color: 'purple',
                    border: '1px solid purple',
                    marginBottom: '20px',
                    boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
                    borderRadius: '5px',
                }}
            >
                <p>
                    <strong>Car name: {this.props.name}</strong>
                </p>
                <p>{this.props.year}</p>
                <input
                    style={{
                        border: '1px solid purple',
                        margin: '0 20px 20px 0',
                    }}
                    type="text"
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                />
                <button
                    onClick={this.props.onDelete}
                    style={{ border: '1px solid purple' }}
                >
                    Delete
                </button>
            </div>
        );
    }
}

// function car() {
//     return <h2>Car</h2>;
// }

// const car = () => ( <div><strong>Test</strong>Car</div> )

// export default car;

// export default this.props => (

// );

Car.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number,
  onChangeName: PropTypes.func,
  onDelete: PropTypes.func,
}

export default Car;
