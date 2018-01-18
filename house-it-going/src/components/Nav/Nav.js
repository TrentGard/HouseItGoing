import React from "react";
import "./Nav.css";

// Component for the Navbar

const Nav = () => 
    <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="/Navbar">Navbar</a>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/Home">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Link">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="/Disabled">Disabled</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div className="dropdown-menu" aria-labelledby="dropdown01">
              <a className="dropdown-item" href="/action">Action</a>
              <a className="dropdown-item" href="/someAction">Another action</a>
              <a className="dropdown-item" href="/someOtherAction">Something else here</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>

export default Nav;
