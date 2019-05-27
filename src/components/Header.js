import React, { useContext } from "react";
import Icon from "./Icon";
import ColorContext from "../contexts/ColorContext";

export default props => {
  const { handleClick } = useContext(ColorContext);
  return (
    <header className="header">
      <div className="c-row">
        <div className="c-col">
          <h1 className="header-title">Todo React Redux</h1>
          <div className="header-action">
            {props.page === "home" ? (
              <>
                <div className="sign-out-btn">
                  <button
                    type="button"
                    className="btn-c"
                    onClick={() => props.onLogin("login")}
                  >
                    Sign out
                  </button>
                </div>
                <Icon />
              </>
            ) : (
              <>
                <Icon />
                <button
                  type="button"
                  className="color-btn"
                  onClick={handleClick}
                >
                  <img src="../images/color1.png" height="23px" alt="" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
