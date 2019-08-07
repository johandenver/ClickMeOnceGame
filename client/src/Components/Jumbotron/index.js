import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">The memory is the first to go!</h1>
        <p class="lead">
          Don't click on the same image twice! Score goes up if you click on
          images once, down if you click on it again.
        </p>
      </div>
    </div>
  );
}

export default Jumbotron;
