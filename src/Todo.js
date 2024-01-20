import { Component } from "react";

export class Todo extends Component {
  render() {
    const { remove } = this.props;
    return (
      <div className="todo">
        <p>{this.props.todo.text}</p>
        {/* Add the onClick event to handle removal of the todos */}

        <button onClick={() => remove(this.props.todo)}>x</button>
      </div>
    );
  }
}
