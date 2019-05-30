import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const TodoInput = props => {
  const textInput = React.createRef();
  const [text, setText] = useState("");
  const onChange = event => {
    setText(event.target.value);
  };
  const submit = event => {
    event.preventDefault();
    setText("");
    props.addTodo(text);
  };
  useEffect(() => {
    textInput.current.focus();
  });
  return (
    <form className="form-c" onSubmit={submit}>
      <input
        className="input-c"
        type="text"
        placeholder="What needs to be done?"
        name="task"
        value={text}
        onChange={onChange}
        required
        ref={textInput}
      />
    </form>
  );
};

export default TodoInput;

TodoInput.propTypes = {
  addTodo: PropTypes.func.isRequired
};
