import React, { Component } from 'react';
import 'react-marquee';
import a3 from './images/A2DownCurve.png';
import './App.css';


class A2Down extends Component {
  render() {
    return (
           <div> <marquee Height={"600px"}direction={"down"} scrollamount={"50"}>
                <img src={a3} /> 
                <img src={a3} /> 
                <img src={a3} /><br /> 
            </marquee>

            
            </div>);
  }
}

export default A2Down;