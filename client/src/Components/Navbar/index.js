import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg">
      <ul>
        <li class="navbar-brand">
          <a href="/">Click Me Once Game!</a>
        </li>
        <li class="navbar-brand message">You Guessed....</li>
        <li class="navbar-brand score justify-content-end">Score:</li>
      </ul>
    </nav>
  );
}

export default Nav;
