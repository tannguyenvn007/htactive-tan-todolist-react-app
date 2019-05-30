import React, { useState } from "react";

import ColorContext from "../contexts/ColorContext";

export default props => {
  const [color, setColor] = useState([12, 3, 3]);
  const formatColor = ary => {
    return "rgb(" + ary.join(", ") + ")";
  };
  const chooseColor = () => [
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256)
  ];

  const handleClick = () => {
    setColor(chooseColor());
  };
  return (
    <ColorContext.Provider
      value={{
        color: formatColor(color),
        handleClick: handleClick
      }}
    >
      {props.children}
    </ColorContext.Provider>
  );
};
