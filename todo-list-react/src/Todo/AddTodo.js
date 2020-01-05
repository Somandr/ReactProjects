import React, { useState } from 'react';
import PropTypes from 'prop-types';

function useInputValue(defaultValue = '') {
    const [value, setValue] = useState(defaultValue);
    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value),
        },
        clear: () => setValue(''),
        value: () => value,
    };
}

function AddTodo({ onCreate }) {
    const input = useInputValue('');

    function submitHandler(event) {
        event.preventDefault();

        if (input.value().trim()) {
            onCreate(input.value());
            input.clear()
            // setValue('')
        }
    }
    return (
        <form
            style={{
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
            }}
            onSubmit={submitHandler}
        >
            <input
                {...input.bind}
                // value={value}
                // onChange={event => setValue(event.target.value)}
                style={{ marginRight: '1rem', height: '2rem' }}
                className="addDeal"
            />
            <button type="submit" className="rb">
                ADD TODO
            </button>
        </form>
    );
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired,
};

export default AddTodo;
