import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import UserProfile from "./pages/UserProfile";

class App extends Component {
  render() {
    return (
      <Router>

        <div>
          <Nav />
          <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/userprofile" component={UserProfile} />
          </div>
          <Footer /> 
        </div>   

      </Router>
    );
  }
}

export default App;

