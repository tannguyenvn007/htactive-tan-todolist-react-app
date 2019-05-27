import React, { Component } from 'react'
import PropTypes from 'prop-types';

class TodoInput extends Component {
  constructor(props){
    super(props)
    this.textInput = React.createRef();
    this.state = {
      text: "",
    }
  }
  onChange = event => {
    this.setState({text: event.target.value})
  }
  submit = event => {
    event.preventDefault();
    this.props.addTodo(this.state.text);
  }
  componentDidMount() {
    this.textInput.current.focus();
  }
  render(){
    return (
      <form className="form-c" onSubmit={this.submit}>
        <input
          className="input-c"
          type="text"
          placeholder="What needs to be done?"
          name="task"
          value={this.state.text}
          onChange={this.onChange}
          required
          ref={this.textInput}
        />
      </form>
    )
  }
}

export default TodoInput;

TodoInput.propTypes = {
    addTodo: PropTypes.func.isRequired
}