import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Security, ImplicitCallback } from '@okta/okta-react';
import Home from './components/Home';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
// import {Container} from "./components/Grid";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";

const config = {
  issuer: 'https://dev-478651.oktapreview.com/oauth2/default',
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: '0oadmccgkao8Etxn10h7'
}

class App extends Component {
  render() {
    return (
      <Router>
          <Security issuer={config.issuer}
                    client_id={config.client_id}
                    redirect_uri={config.redirect_uri}
          >

            <Nav />

            <div>
              <Route path='/' exact={true} component={Home}/>
              <Route path='/implicit/callback' component={ImplicitCallback}/>            
              <Route exact path="/" component={HomePage} />
              <Route exact path="/dash" component={Dashboard} />
            </div>

            <Footer />
          </Security>          
      </Router>
    );
  }
}

export default App;