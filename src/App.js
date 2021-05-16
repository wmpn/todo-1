import React, { useState } from 'react';
import './App.css';
//importing components
import Form from "./components/form";
import TodoList from "./components/todo-list";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Managable TODO List </h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
      <TodoList todos={todos}  setTodos={setTodos}/>
    </div>
  );
}

export default App;
