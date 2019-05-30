import React, { useContext } from "react";
import TodoContext from "../contexts/TodoContext";

export default Component => {
  return props => {
    const context = useContext(TodoContext);

    return <Component {...context} {...props} />;
  };
};
