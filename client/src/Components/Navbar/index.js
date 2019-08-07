import React from "react";
import "./style.css";

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <ul>
          <li className="navbar-brand">
            <a href="/">Click Me Once Game!</a>
          </li>
          <li className="navbar-brand message">You Guessed....</li>
          <li className="navbar-brand score">Score: {this.props.score}</li>
          <li className="navbar-brand high-score justify-content-end">
            HighScore: {this.props.highscore}
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
