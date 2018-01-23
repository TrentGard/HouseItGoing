import React, { Component } from 'react';
import { withAuth } from '@okta/okta-react';
import styled from 'styled-components';

const Button = styled.div`
  width: 75px;
  height: 30px;
  text-align: center;
  background-color: #e3ad86; 
  color: black; 
  border: 2px solid #DCDCDC;
  font-size: 110%;
  font-weight: bold;

  &:hover {
    background-color: #008CBA;
    color: white;
  }
  `;

export default withAuth(class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: null };
    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.checkAuthentication();
  }

  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  componentDidUpdate() {
    this.checkAuthentication();
  }

  render() {
    if (this.state.authenticated === null) return null;
    return this.state.authenticated ?
      <Button className="loginButton" onClick={this.props.auth.logout}>Logout</Button> :
      <Button className="loginButton" onClick={this.props.auth.login}>Login</Button>;
  }
});