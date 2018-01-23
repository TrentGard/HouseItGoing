import React from "react";
import "./Jumbotron.css";


const Jumbotron = props =>
  <div style={{ background: 'url(./img/apt.jpg) center', backgroundSize: 'cover'}} className="jumbotron jumbotron-fluid">
  	<div className="container-fluid">
  		<header className="search-body">
  			{props.children}
      </header>
  	</div>
  </div>;

export default Jumbotron;