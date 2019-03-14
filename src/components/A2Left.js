
import React, { Component } from 'react';
import 'react-marquee';
import a3 from './images/A2leftCurve.png';
import './App.css';

class A2Left extends Component {
  render() {
    return (
           <div> 
           
            
            <marquee direction={"left"} scrollamount={"100"}>
                <img src={a3} /> 
                <img src={a3} /> 
                <img src={a3} /><br /> 
            </marquee>

            <marquee direction={"left"} scrollamount={"100"}>
                <img src={a3} /> 
                <img src={a3} /> 
                <img src={a3} /> <br />
            </marquee>

            <marquee direction={"left"} scrollamount={"100"}>
                <img src={a3} /> 
                <img src={a3} /> 
                <img src={a3} />
            </marquee> 
            </div>
                     
             );
  }
}

export default A2Left;