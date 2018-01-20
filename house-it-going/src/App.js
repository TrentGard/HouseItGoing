import React, { Component } from 'react';
import { Questionnaire } from './components/Questionnaire';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Questionnaire />
      </div>
    );
  }
}

export default App;
