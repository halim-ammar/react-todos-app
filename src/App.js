import { useState } from 'react';
import Input from './components/Input';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(text) {
    const newTodo = { id: Math.random(), text };
    setTodos((prev) => [...prev, newTodo]);
  }

  function removeTodo(id) {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <div className='App'>
      <Input addTodo={addTodo} />
      <TodoList list={todos} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
