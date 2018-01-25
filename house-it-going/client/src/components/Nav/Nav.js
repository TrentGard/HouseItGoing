import React from "react";
import "./Nav.css";

// Component for the Navbar

const Nav = () => 


  <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
    <button className="navbar-toggler navbar-toggler-right dropdown dropbtn" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon dropbtn"></span>
      <div class="dropdown-content">
      <a href="localhost:3000/dash">Dashboard</a>
      <a href="#">Contact</a>
      {/*<a href="#">Link 3</a>*/}
    </div>
    </button>

    <a className="navbar-brand" href="/">House It Going</a>

    <div className="collapse navbar-collapse">
      <ul className="navbar-nav mr-auto mt-2 mt-md-0">
        <li className="nav-item active">
          <a className="nav-link" href="/dash">Dashboard <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/tbd">Notifications</a>
        </li>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>      
        <li className="nav-item">
          <a className="nav-link disabled" href="/dash:{id}">Account</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="/Home">Login</a>
        </li>      
      </ul>
    </div>
  </nav>    

export default Nav;
