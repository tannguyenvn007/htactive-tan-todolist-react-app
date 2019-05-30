import React, { useState } from "react";
import Button from "./Button";

const Content = props => {

  const [button] = useState(["GitHub", "Google", "Twitter"]);

  return (
    <main className="main">
      <div className="c-row sign-in">
        <div className="c-col">
          <h1 className="sign-in-heading">Sign in</h1>
          <div className="sign-in-button">
            {button.map((button, key) => (
              <Button key={key} text={button} onLogin={props.onLogin} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Content;
