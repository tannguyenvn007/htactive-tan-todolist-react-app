import React, { Component } from "react";
import TodoContext from "../contexts/TodoContext";
import axios from "axios";
import * as API from "../constants/config";

export default class extends Component {
  state = {
    todos: [],
    filter: "all",
    isLoading: false
  };
  async componentDidMount() {
    this.setState({ isLoading: true });
    const task = await axios.get(`${API.API_URL}tasks`);
    this.setState({
      todos: task.data.sort(this.compare),
      isLoading: false
    });
  }
  addTodo = async text => {
    const to = await axios.post(`${API.API_URL}tasks`, {
      done: true,
      text: text
    });
    this.setState({
      todos: [to.data, ...this.state.todos]
    });
  };

  removeTodo = async id => {
    if (window.confirm("Are you sure?")) {
      await axios.delete(`${API.API_URL}tasks/${id}`);
      const todos = this.state.todos.filter(t => t.id !== id);
      this.setState({
        todos
      });
    }
  };

  updateTodo = id => {
    const todos = this.state.todos.map(t =>
      t.id !== id ? t : { ...t, isEditing: true }
    );
    this.setState({
      todos
    });
  };
  updateTodoList = async (text, id) => {
    await axios.put(`${API.API_URL}tasks/${id}`, {
      text
    });
    const todos = this.state.todos.map(t =>
      t.id !== id ? t : { ...t, text, isEditing: false }
    );
    this.setState({
      todos
    });
  };

  completeTodo = async (id, done) => {
    await axios.put(`${API.API_URL}tasks/${id}`, {
      done: !done
    });
    const todos = this.state.todos.map(t =>
      t.id !== id ? t : { ...t, isEditing: false, done: !t.done }
    );
    this.setState({
      todos
    });
  };

  filterStatus = status => {
    this.setState({
      filter: status
    });
  };

  filterTodo = () => {
    const { todos, filter } = this.state;
    switch (filter) {
      case "active":
        return todos.filter(t => t.done);
      case "complete":
        return todos.filter(t => !t.done);
      default:
        return todos;
    }
  };

  onCloseInput = id => {
    const todos = this.state.todos.map(t =>
      t.id !== id ? t : { ...t, isEditing: false }
    );
    this.setState({
      todos
    });
  };
  compare = (a, b) => {
    return b.id - a.id;
  };
  render() {
    return (
      <TodoContext.Provider
        value={{
          isLoading: this.state.isLoading,
          addTodo: this.addTodo,
          todos: this.filterTodo(),
          filterStatus: this.filterStatus,
          active: this.state.filter,
          removeTodo: this.removeTodo,
          updateTodo: this.updateTodo,
          updateTodoList: this.updateTodoList,
          onCloseInput: this.onCloseInput,
          completeTodo: this.completeTodo
        }}
      >
        {this.props.children}
      </TodoContext.Provider>
    );
  }
}
