import React, { Component } from 'react';
import logo from './logo.svg';
import './components/App';
import Sun from './components/Sun';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={Sun} className="App-logo" alt="logo" />
          
       
            
          
        </header>
      </div>
    );
  }
}

export default App;

