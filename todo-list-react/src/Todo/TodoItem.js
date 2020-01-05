import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context';

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid deepskyblue',
        borderRadius: '5px',
        marginBottom: '.5rem',
        color: 'deeppink',
    },
    strong: {
        color: 'deepskyblue',
    },
};

function TodoItem({ todo, index, onChange }) {
    const { removeTodo } = useContext(Context);
    let classes = [];

    if (todo.completed) {
        classes.push('done');
    }

    return (
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={ () => onChange(todo.id) }
                    className='ib'
                />
                <label style={styles.strong}>{index + 1}</label>
                &nbsp;
                {todo.title}
            </span>
            <button className="rm" onClick={() => removeTodo(todo.id)}>
                &times;
            </button>
        </li>
    );
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired,
};

export default TodoItem;
