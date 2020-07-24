import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import List from './components/List';
import withListLoading from './components/withListLoading';

function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    todoItems: null,
  });

  useEffect(() => {
    setAppState({loading: true});
    const apiUrl = "http://localhost:8000/todo-incomplete";
    axios.get(apiUrl).then((todoItems) => {
      const incompleteTodoItems = todoItems.data;
      setAppState({ loading: false, todoItems: incompleteTodoItems})
    });
  }, [setAppState]);


  return (
    <div className="App">
      <div className="container">
        <h1>To do list</h1>      
      </div>
      <div className="incompleteTodo-container">
        <ListLoading isLoading={appState.loading} todoItems={appState.todoItems} />
      </div>
    </div>
  );
}

export default App;
