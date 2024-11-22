import React from 'react';
import './App.css';
import TaskList from "./taskList/TaskList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>TOMY-TASK</p>
      </header>
      <div className="App-task">
        <TaskList />
      </div>
    </div>
  );
}
export default App;
