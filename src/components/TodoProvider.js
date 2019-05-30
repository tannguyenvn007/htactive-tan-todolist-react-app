import React, { useState, useEffect } from "react";
import TodoContext from "../contexts/TodoContext";
import axios from "axios";
import * as API from "../constants/config";

export default props => {
  const [todos, setTodo] = useState([]);
  const [filter, setFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTask = async () => {
      setIsLoading(true);
      const task = await axios.get(`${API.API_URL}tasks`);
      setTodo(task.data.sort(compare));
      setIsLoading(false);
    };
    fetchTask();
  }, []); // truyển mảng rỗng để useEffect chạy 1 lần (Didmount), nếu không truyền nó sẽ chạy liên tục vì lúc đó nó sẽ hiểu là (Didupdate)
  const addTodo = async text => {
    const to = await axios.post(`${API.API_URL}tasks`, {
      done: true,
      text: text
    });
    setTodo([to.data, ...todos]);
  };

  const removeTodo = async id => {
    if (window.confirm("Are you sure?")) {
      await axios.delete(`${API.API_URL}tasks/${id}`);
      const todo = todos.filter(t => t.id !== id);
      setTodo(todo);
    }
  };

  const updateTodo = id => {
    const todo = todos.map(t => (t.id !== id ? t : { ...t, isEditing: true }));
    setTodo(todo);
  };
  const updateTodoList = async (text, id) => {
    await axios.put(`${API.API_URL}tasks/${id}`, {
      text
    });
    const todo = todos.map(t =>
      t.id !== id ? t : { ...t, text, isEditing: false }
    );
    setTodo(todo);
  };

  const completeTodo = async (id, done) => {
    await axios.put(`${API.API_URL}tasks/${id}`, {
      done: !done
    });
    const todo = todos.map(t =>
      t.id !== id ? t : { ...t, isEditing: false, done: !t.done }
    );
    setTodo(todo);
  };

  const filterStatus = status => {
    setFilter(status);
  };

  const filterTodo = () => {
    switch (filter) {
      case "active":
        return todos.filter(t => t.done);
      case "complete":
        return todos.filter(t => !t.done);
      default:
        return todos;
    }
  };

  const onCloseInput = id => {
    const todo = todos.map(t => (t.id !== id ? t : { ...t, isEditing: false }));
    setTodo(todo);
  };
  const compare = (a, b) => {
    return b.id - a.id;
  };
  return (
    <TodoContext.Provider
      value={{
        isLoading: isLoading,
        addTodo: addTodo,
        todos: filterTodo(),
        filterStatus: filterStatus,
        active: filter,
        removeTodo: removeTodo,
        updateTodo: updateTodo,
        updateTodoList: updateTodoList,
        onCloseInput: onCloseInput,
        completeTodo: completeTodo
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
