import React, { Component } from 'react';
import SmoothImage from 'react-smooth-image';
//import logo from './logo.svg';
import a1up from './images/a1up.png';

class A1up extends Component {
  render() {
    return (
      <div >
        <header >
          <img src={a1up}  className="A1up"  />
        </header>
      </div>
    );
  }
}

export default A1up;