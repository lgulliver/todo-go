import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://media.giphy.com/media/YQitE4YNQNahy/giphy.gif" alt="" />
        <p><h1>I can do React now</h1></p>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
