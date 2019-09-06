import React, { Component } from 'react'

export default class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            todoValue: 'default value'
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.todoValue);
        this.props.addTodo(this.state.todoValue);
    }

    handleInput(e) {
        e.preventDefault();
        console.log(e.target.value);
        this.setState({
            todoValue: e.target.value
        });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.todoValue} onChange={this.handleInput}></input>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}
