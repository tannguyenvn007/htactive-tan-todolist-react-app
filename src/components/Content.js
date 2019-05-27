import React, { Component } from "react";
import Button from "./Button";

class Content extends Component {
  state = {
    button: ["GitHub","Google","Twitter"]
  }
  render() {
    return (
      <main className="main">
        <div className="c-row sign-in">
          <div className="c-col">
            <h1 className="sign-in-heading">Sign in</h1>
            <div className="sign-in-button">
              {this.state.button.map( (button, key) =>  <Button key={key} text={button} onLogin={this.props.onLogin} /> )}
            </div>
          </div>
        </div>
      </main>
    );
  }
}
export default Content;