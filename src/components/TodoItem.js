import React, { Component } from "react";
import PropTypes from 'prop-types';
import TodoContext from "../contexts/TodoContext";

class TodoItem extends Component {
  state = {
    text: ""
  }
  handleChange = (event) => {
    this.setState({text: event.target.value});
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.updateTodoList(this.state.text, this.props.todo.id )
  }
  render() {
    const {todo} = this.props;
    return (
      <TodoContext.Consumer>
        {value => <div className="cell">
        {!todo.isEditing  ? (
          <>
            <button className="btn-c btn-icon" onClick={() => value.completeTodo(todo.id, todo.done)}>
              <i className={!todo.done ?  " fas fa-check  btn-active" :"fas fa-check "}/>
            </button>
            <p className={!todo.done ?  " cell-item item-text text-active" :"cell-item item-text"}>{todo.text}</p>
            <button
              className="btn-c btn-icon"
              onClick={() => value.updateTodo(todo.id)}
            >
              <i className="fas fa-pen" />
            </button>
            <button
              className="btn-c btn-icon"
              onClick={() => value.removeTodo(todo.id)}
            >
              <i className="fas fa-trash-alt" />
            </button>
          </>
        ) : (
          <>
            <form onSubmit={this.handleSubmit}>
              <input
                className="cell-item item-text input-item"
                type="text"
                placeholder="asdas"
                defaultValue={todo.text}
                onChange={this.handleChange}
              />
            </form>
            <button
              type="button"
              className="btn-c btn-icon"
              onClick={() => value.onCloseInput(todo.id)}
            >
              <i className="fas fa-times" />
            </button>
          </>
        )}
      </div>}
      </TodoContext.Consumer>

    );
  }
}
export default TodoItem;

TodoItem.propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string,
    done: PropTypes.bool,
  }),
  completeTodo: PropTypes.func,
  updateTodo: PropTypes.func,
  removeTodo: PropTypes.func,
  onCloseInput: PropTypes.func,
  updateTodoList: PropTypes.func
}