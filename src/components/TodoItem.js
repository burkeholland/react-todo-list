import React from 'react';

class TodoItem extends React.Component {
  render() {
    const { title, completed } = this.props.todo;
    return (
      <div className="todo-item">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => this.props.toggleComplete(this.props.todo.id)}
        />
        <p className={completed ? 'completed' : ''}>{title}</p>
        <button onClick={() => this.props.deleteTodo(this.props.todo.id)}>Delete</button>
      </div>
    );
  }
}

export default TodoItem;