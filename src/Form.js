import { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  addTodo = () => {
    const todoText = this.state.text;
    this.setState({ text: "" });
    this.props.add(todoText);
  };
  render() {
    return (
      <div className="form">
        <input
          onChange={this.handleChange}
          value={this.state.text}
          placeholder="Whats on your mind?"
          required
        />
        {/* Add onclick event on the button to add the todos */}

        <button onClick={this.addTodo}>Add</button>
      </div>
    );
  }
}
