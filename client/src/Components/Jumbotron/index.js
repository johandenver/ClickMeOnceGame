import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Clear your mind Jedi!</h1>
        <p className="lead">
          Don't click on the same image twice! Score goes up if you click on
          images once, down if you click on it again.
        </p>
      </div>
    </div>
  );
}

export default Jumbotron;
