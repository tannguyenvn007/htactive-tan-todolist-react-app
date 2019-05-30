import React, {useContext } from "react";
import ColorContext from "../contexts/ColorContext";

export default props => {
  var { text, onLogin } = props;
  const {color, button} = useContext(ColorContext);
  return (
    <button
      onClick={() => onLogin("home")}
      type="button"
      className="btn-c"
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};
