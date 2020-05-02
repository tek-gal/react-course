import React, { useEffect } from 'react';
import TodoList from './components/TodoList';
import Modal from './Modal';
import Loader from './Loader';
import Context from './context';

const AddTodo = React.lazy(() => new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('./components/AddTodo'));
    }, 3000);
  })
);

function App() {
  const [todos, setTodos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then((res) => res.json())
      .then((todos) => {
        setTimeout(() => {
          setTodos(todos);
          setLoading(false);
        }, 2000);
      })
  }, [])

  function toggleTodo(id) {
    setTodos(todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function addTodo(title) {
    setTodos([
      ...todos,
      {
        title,
        id: Date.now().toString(),
        completed: false,
      }
    ]);
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>React Tutorial</h1>
        <Modal />

        <React.Suspense fallback={<p>Loading...</p>}>
          <AddTodo onCreate={addTodo}/>
        </React.Suspense>

        {loading && <Loader />}
        {todos.length
          ? <TodoList todos={todos} onToggle={toggleTodo}/>
          : (loading ? null : <p>No todos</p>)
        }

      </div>
    </Context.Provider>
  );
}

export default App;
