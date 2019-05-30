import React from "react";
import PropTypes from "prop-types";
import withTodo from "../hocs/withTodo";

const TodoItem = props => {
  const [text, setText] = React.useState(props.todo.text)
  const handleChange = event => {
    setText(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    props.updateTodoList(text, props.todo.id);
  };
  const { todo, completeTodo, updateTodo, removeTodo, onCloseInput } = props;
  return (
    <div className="cell">
      {!todo.isEditing ? (
        <>
          <button
            className="btn-c btn-icon"
            onClick={() => completeTodo(todo.id, todo.done)}
          >
            <i
              className={
                !todo.done ? " fas fa-check  btn-active" : "fas fa-check "
              }
            />
          </button>
          <p
            className={
              !todo.done
                ? " cell-item item-text text-active"
                : "cell-item item-text"
            }
          >
            {todo.text}
          </p>
          <button
            className="btn-c btn-icon"
            onClick={() => updateTodo(todo.id)}
          >
            <i className="fas fa-pen" />
          </button>
          <button
            className="btn-c btn-icon"
            onClick={() => removeTodo(todo.id)}
          >
            <i className="fas fa-trash-alt" />
          </button>
        </>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <input
              className="cell-item item-text input-item"
              type="text"
              placeholder="asdas"
              defaultValue={text}
              onChange={handleChange}
            />
          </form>
          <button
            type="button"
            className="btn-c btn-icon"
            onClick={() => onCloseInput(todo.id)}
          >
            <i className="fas fa-times" />
          </button>
        </>
      )}
    </div>
  );
};
export default withTodo(TodoItem);

TodoItem.propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string,
    done: PropTypes.bool
  }),
  completeTodo: PropTypes.func,
  updateTodo: PropTypes.func,
  removeTodo: PropTypes.func,
  onCloseInput: PropTypes.func,
  updateTodoList: PropTypes.func
};
