import React from "react";
import "./Nav.css";

// Component for the Navbar

const Nav = props => (
  <nav className="navbar">
    <ul>
      <li className="brand">
        <a href="/">House It Going</a>
      </li>
      <li>
        Login: {props.login} | Saved Search: {props.savedSearch}
      </li>
    </ul>
  </nav>
);

export default Nav;
