import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/header';
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

// Toggle Complete

    markComplete = (id) => {
      this.setState({ todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      }) })
    }

// Delete Todo

delTodo = (id) => {
  this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
}

  render () {
    return (
      <div className="App">
        <Header />
        <Todos todos={this.state.todos} markComplete={this.markComplete} 
        delTodo={this.delTodo} />
      </div>
    );
  }
}

export default App;
