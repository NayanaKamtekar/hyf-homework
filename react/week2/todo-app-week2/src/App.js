import React from 'react';
import './App.css';
import TodoTaskList from './Components/TodoTaskList';

function App() {
  console.log('App rendered')
  return (
    <div>
    <TodoTaskList
      tasks={
        [
            {id: 1, description: "Get out of bed", deadline: "Wed Sep 13 2018"},
            {id: 2, description: "Brush teeth", deadline: "Thu Sep 14 2017"},
            {id: 3, description: "Get out of bed", deadline: "Fri Sep 15 2017"}
        ]
    }
    />

    </div>
  );
}

export default App;
