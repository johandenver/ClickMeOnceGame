import React from "react";
import "./style.css";

function Header() {
  return (
    <div className="header">
      <div className="container header-content">
        <h3 className="display-4">Clear your mind Jedi!</h3>
        <p className="lead">
          Don't click on the same image twice! Score goes up if you click on
          images once, down if you click on it again.
        </p>
      </div>
    </div>
  );
}

export default Header;
