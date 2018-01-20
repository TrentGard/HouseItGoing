import React from "react";
import "./Jumbotron.css";
import ZipForm from "../../components/ZipForm";

const Jumbotron = () =>
  <div style={{ background: 'url(./img/apt.jpg) center', backgroundSize: 'cover'}} className="jumbotron jumbotron-fluid">
  	<div className="container-fluid">
  		<header>
  			<h1>Find affordable housing</h1>
  		</header>
  		<div className="search-body">
  			<ZipForm />
  		</div>	
  	</div>
  </div>;

export default Jumbotron;