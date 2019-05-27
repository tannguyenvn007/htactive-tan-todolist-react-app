import React, { Component } from "react";

import ColorContext from "../contexts/ColorContext"

export default class extends Component {

  state = {
    color : [12,3,3]
  }
  formatColor = ary => {
    return "rgb(" + ary.join(", ") + ")";
  };
  chooseColor = () => [
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256)
  ];

  handleClick = () => {
    this.setState({
      color: this.chooseColor()
    });
  };

  alertColor = () => {

  }
  render() {
    return (
      <ColorContext.Provider value={{
        color: this.formatColor(this.state.color),
        handleClick: this.handleClick,
      }}>
        {this.props.children}
      </ColorContext.Provider>
    );
  }
}
