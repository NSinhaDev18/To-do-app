import { Component } from "react";
import { Todo } from "./Todo";

export class List extends Component {
  render() {
    const { todos, add, remove } = this.props;
    return (
      <div className="list">
        {/* Render the todo here from the props*/}
        {todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} remove={remove} />;
        })}
      </div>
    );
  }
}
