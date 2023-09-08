// src/components/AddTodo.js

import React, { Component } from 'react';
import '../styles/AddTodo.css';

class AddTodo extends Component {
  state = {
    title: ''
  }

  handleChange = (e) => {
    this.setState({
      title: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodo({
        title: this.state.title,
        completed: false
      });
      this.setState({
        title: ''
      });
    }
  }

  render() {
    return (
      <form className="add-todo" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Add Todo..." value={this.state.title} onChange={this.handleChange} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default AddTodo;