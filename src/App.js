import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';

import './App.css';

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
      console.log(id);
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
    id: Math.random(),
    title,
    completed: false
  }
  this.setState({ todos: [...this.state.todos, newtodo]})
}

  render () {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path='/' render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete}
                  delTodo={this.delTodo} />
              </React.Fragment>
            )} />
            <Route path='/about' component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
