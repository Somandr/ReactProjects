import React from 'react';
import TodoList from './Todo/TodoList';

function App() {
    let [todos, setTodos] = React.useState([
        { id: 1, completed: false, title: 'Reach the top' },
        { id: 2, completed: false, title: 'Taste life' },
        { id: 3, completed: false, title: 'Enjoy React' },
    ]);

    function toggleTodo(id) {
        setTodos(
        todos = todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        })
        )
    }

    return (
        <div className="wrapper">
            <h1>React - ToDo List</h1>
            <TodoList todos={todos} onToggle={toggleTodo} />
        </div>
    );
}

export default App;
