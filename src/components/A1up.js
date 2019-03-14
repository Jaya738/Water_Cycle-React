import React, { Component } from 'react';
import SmoothImage from 'react-smooth-image';
import 'react-marquee';
import a1up from './images/AUpCurve.png';

class A1up extends Component {
  render() {
    return (
      <div >
        <header >
          <marquee Height={"500x"} direction={"up"} scrollamount={"80"} scrolldelay={"200"}><img src={a1up}  className="A1up"  /></marquee>
        </header>
      </div>
    );
  }
}

export default A1up;