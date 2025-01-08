import React from 'react';
import HeaderBar from './taskList/HeaderBar';
import TaskList from './taskList/TaskList';

function App() {
  return (
    <div>
      <header>
        <HeaderBar />
      </header>
      <div>
        <TaskList />
      </div>
    </div>
  );
}
export default App;
