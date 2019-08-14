import React from "react";
import "./style.css";

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-fixed-top">
        <ul className="nav-items">
          <li className="navbar-brand">
            <a className="logo" href="/">
              Jedi Mind Tricks!
            </a>
          </li>
          {/* pass in props to the message and the scores */}
          <li className="navbar-brand message">{this.props.message}</li>
          <li className="navbar-brand score">Score: {this.props.score}</li>
          <li className="navbar-brand high-score">
            High Score: {this.props.highScore}
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
