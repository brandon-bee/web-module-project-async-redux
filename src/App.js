import React from 'react';
import './App.css';
import MonsterList from './components/MonstersList';

function App() {
  return (
    <div className="App">
      <h1>Async Redux Project - MHW Monster Reference</h1>

      <form>
        <input
          type="text"
        />
        <button>Search</button>
      </form>
      
      <MonsterList />
    </div>
  );
}

export default App;