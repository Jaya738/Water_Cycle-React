
import React, { Component } from 'react';
import 'react-marquee';
import a3 from './images/a1left.png';
import './App.css';

class A2Left extends Component {
  render() {
    return (
           <div> 
            <marquee direction={"left"} scrollamount={"120"}>
                <img src={a3} /> 
                <img src={a3} /> 
                <img src={a3} />
            </marquee>
            
            <marquee direction={"left"} scrollamount={"60"}>
                <img src={a3} /> 
                <img src={a3} /> 
                <img src={a3} /><br /> 
            </marquee>

            <marquee direction={"left"} scrollamount={"30"}>
                <img src={a3} /> 
                <img src={a3} /> 
                <img src={a3} /> <br />
            </marquee>

            <marquee direction={"left"} scrollamount={"15"}>
                <img src={a3} /> 
                <img src={a3} /> 
                <img src={a3} />
            </marquee> 
            </div>
                     
             );
  }
}

export default A2Left;