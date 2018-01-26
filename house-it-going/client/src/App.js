import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
// import {Container} from "./components/Grid";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import Questionnaire from './components/Questionnaire/Questionnaire';

const config = {
  issuer: 'https://dev-478651.oktapreview.com/oauth2/default',
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: '0oadmccgkao8Etxn10h7'
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/questionnaire" component={Questionnaire} />
          </div>
          <Footer /> 
        </div>   
      </Router>
    );
  }
}

export default App;

