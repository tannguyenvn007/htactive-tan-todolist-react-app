import React, { useContext } from "react";
import TodoInput from "../components/TodoInput";
import { TodoContent } from "../components/TodoContent";
import Loader from "react-loader-spinner";
import TodoContext from "../contexts/TodoContext";

export default () => {
  const { isLoading, addTodo } = useContext(TodoContext);
  return (
    <>
      {isLoading ? (
        <div className="loader">
          <Loader
            type="Ball-Triangle"
            color="rgb(206, 244, 66)"
            height="100"
            width="100"
          />
        </div>
      ) : (
        <div className="c-row">
          <div className="c-col">
            <TodoInput addTodo={addTodo} />
          </div>
          <div className="c-col">
              <TodoContent />
          </div>
        </div>
      )}
    </>
  );
};
