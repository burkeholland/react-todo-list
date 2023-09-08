import React, { Component } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  add_todo(todo) {
    this.setState(prevState => ({
      todos: [...prevState.todos, todo]
    }));
  }

  toggleComplete(id) {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    }));
  }

  /**
   * Deletes all completed todos from the state.
   * @returns {void}
   */
  deleteTodo = () => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => !todo.completed)
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <TodoList todos={this.state.todos} toggleComplete={this.toggleComplete} />
        <AddTodo addTodo={this.addTodo} />
        <button onClick={this.deleteTodo}>Delete Completed</button>
      </div>
    );
  }
}

export default App;