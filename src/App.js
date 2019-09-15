import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

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

// Add Todo

addTodo = (title) => {
  const newtodo = {
    id: 4,
    title,
    completed: false
  }
  this.setState({ todos: [...this.state.todos, newtodo]})
}

  render () {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete}
            delTodo={this.delTodo} />
        </div>
      </div>
    );
  }
}

export default App;
