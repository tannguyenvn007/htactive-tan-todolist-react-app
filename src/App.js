import React, { useState } from "react";

import "./App.css";
import Login from "./views/Login";
import Home from "./views/Home";
import Header from "./components/Header";
import ColorProvider from "./components/ColorProvider";
import TodoProvider from "./components/TodoProvider";

const App = () => {

  const [page, setPage] = useState("");
  const onChangePage = page => setPage(page);

  return (
    <ColorProvider>
      <div className="wrapper">
        <Header
          page={page}
          onLogin={onChangePage}
        />
        {page === "home" ? (
          <TodoProvider>
            <Home />
          </TodoProvider>
        ) : (
          <Login onLogin={onChangePage} page={page} />
        )}
      </div>
    </ColorProvider>
  );
};

export default App;
