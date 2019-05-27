import React from "react";

import "./App.css";
import Login from "./views/Login";
import Home from "./views/Home";
import Header from "./components/Header";
import ColorProvider from "./components/ColorProvider";
import TodoProvider from "./components/TodoProvider";

class App extends React.Component {
  state = {
    page: "",
    isLoading: false,
    color: [34, 34, 34]
  };
  onChangePage = page => this.setState({ page });

  render() {
    const { page } = this.state;
    return (
      <ColorProvider>
        <div className="wrapper">
          <Header
            page={page}
            onLogin={this.onChangePage}
            onClick={this.handleClick}
          />
          {page === "home" ? (
            <TodoProvider>
              <Home />
            </TodoProvider>
          ) : (
            <Login onLogin={this.onChangePage} page={page} />
          )}
        </div>
      </ColorProvider>
    );
  }
}

export default App;
