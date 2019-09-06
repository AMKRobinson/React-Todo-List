import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Wash the dishes',
        completed: false
      },
      {
        id: 2,
        title: 'Vaccuum',
        completed: false
      },
      {
        id: 3,
        title: 'Make dinner',
        completed: false
      },
      {
        id: 4,
        title: 'Walk the dog',
        completed: false
      },
    ]
  }
  render () {
    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
