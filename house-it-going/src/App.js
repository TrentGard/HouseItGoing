import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Security, ImplicitCallback } from '@okta/okta-react';
import Home from './components/Home';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import UserProfile from "./pages/UserProfile";


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
          <Nav/>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/dash" component={Dashboard} />
            <Route exact path="/login" component={UserProfile} />
          </Switch>
          <Security issuer={config.issuer}
                    client_id={config.client_id}
                    redirect_uri={config.redirect_uri}
          >
            <Route path='/' exact={true} component={Home}/>
            <Route path='/implicit/callback' component={ImplicitCallback}/>
          </Security> 
          <Footer />         
        </div>       
      </Router>
    );
  }
}


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

class App extends Component {
  render() {
    return (
      <Router>
        <Security issuer={config.issuer}
                  client_id={config.client_id}
                  redirect_uri={config.redirect_uri}
        >
          <Route path='/' exact={true} component={Home}/>
          <Route path='/implicit/callback' component={ImplicitCallback}/>
        </Security>
      </Router>
    );
  }
}

export default App;
