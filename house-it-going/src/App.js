import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UserProfile from "./pages/UserProfile";

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/dash" component={Dashboard} />
        <Route exact path="/dash/:id" component={UserProfile} />
      </Switch>
    </div>
  </Router>;

export default App;