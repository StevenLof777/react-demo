import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  useState([])
  const [todos, setTodos] = useState([{id:1, name: 'Todo 1', complete: true}])
  return (
    <>
    <TodoList todos={todos}/>
    <input type="text" />
    <button>Add Todo</button>
    <button>Clear Complete</button>
    <div>0 Left to do</div>
    </>
 )
}

export default App;
