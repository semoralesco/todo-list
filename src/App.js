import './App.css';
import React from 'react';
import TodoList from './Components/TodoList';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;
