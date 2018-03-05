import React from 'react';
import './NavBar.css';

const NavBar = props => (
  <div className="NavBar-header">
    <ul>
      <li>
        <a href="/">Star Wars Clicky Game</a>
      </li>
      <li>{props.subtitle}</li>
      <li>
        Score: {props.score} | Top Score: {props.topScore}
      </li>
    </ul>
  </div>
);

export default NavBar;
