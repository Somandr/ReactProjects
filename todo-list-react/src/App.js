import React, { useEffect } from 'react';
import TodoList from './Todo/TodoList';
import Context from './context';
import Loader from './Loader';
import Modal from './Modal/Modal'

const AddTodo = React.lazy(() => import('./Todo/AddTodo'));

function App() {
    let [todos, setTodos] = React.useState([
        // { id: 1, completed: false, title: 'Reach the top' },
        // { id: 2, completed: false, title: 'Taste life' },
        // { id: 3, completed: false, title: 'Enjoy React' },
    ]);
    let [loading, setLoading] = React.useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(todos => {
                setTimeout(() => {
                    setTodos(todos);
                    setLoading(false);
                }, 2000);
            });
    }, []);
    function toggleTodo(id) {
        setTodos(
            (todos = todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })),
        );
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    function addTodo(title) {
        setTodos(
            todos.concat([
                {
                    title,
                    id: Date.now(),
                    completed: false,
                },
            ]),
        );
    }

    return (
        <Context.Provider value={{ removeTodo }}>
            <div className="wrapper">
                <h1>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" />
                    <span>React</span> -
                    <span style={{ color: 'deeppink' }}>T</span>o
                    <span style={{ color: 'deeppink' }}>D</span>o List
                </h1>
                <Modal />
                <React.Suspense fallback={<p>Loading....</p>}>
                    <AddTodo onCreate={addTodo} />
                </React.Suspense>
                {loading && <Loader />}
                {todos.length ? (
                    <TodoList todos={todos} onToggle={toggleTodo} />
                ) : loading ? null : (
                    <p style={{ fontSize: '20px', textAlign: 'center' }}>
                        No deals for today, Bro!
                    </p>
                )}
            </div>
        </Context.Provider>
    );
}

export default App;
