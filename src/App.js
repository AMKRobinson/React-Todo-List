import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import TodoForm from './components/TodoForm';

class App extends Component {

  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.state = {
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
  }

  addTodo(todoText) {
    console.log(`todo text: ${todoText}`)
    let todos = this.state.todos;
    todos.push({
      id: this.state.todos[this.state.todos.length - 1].id + 1,
      title: todoText,
      completed: false
    });

    this.setState({
      todos: todos
    });
  }

  render () {
    return (
      <div className="App">
        <TodoForm addTodo={this.addTodo} />
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
