import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types';
import withTodo from "../hocs/withTodo";

 const TodoContent = (props) =>{
  const {todos, filterStatus,active,updateTodoList} = props;
  return (
    <>
      <ul className="tasks">
        <li className={active === "all" ? "task-item active" : "task-item"}><a type="button" onClick={() => filterStatus("all")}>View All</a></li>
        <li className={active === "active" ? "task-item active" : "task-item"}><a type="button" onClick={() => filterStatus("active")}>Active</a></li>
        <li className={active === "complete" ? "task-item active" : "task-item"}><a type="button" onClick={() => filterStatus("complete")}>Complete</a></li>
      </ul>
      <div className="task-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            updateTodoList={updateTodoList}
          />
        ))}
      </div>
    </>
  );
}
export default withTodo(TodoContent);

TodoContent.propTypes = {
  filterStatus: PropTypes.func,
}