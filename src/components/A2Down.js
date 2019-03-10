import React, { Component } from 'react';
import 'react-marquee';
import a3 from './images/a1down.png';
import './App.css';


class A2Down extends Component {
  render() {
    return (
           <div> <marquee direction={"down"} scrollamount={"15"}>
                <img src={a3} /> 
                <img src={a3} /> 
                <img src={a3} /><br /> 
            </marquee>

            <marquee direction={"down"} scrollamount={"30"}>
                <img src={a3} /> 
                <img src={a3} /> 
                <img src={a3} /> <br />
            </marquee>

            <marquee direction={"down"} scrollamount={"60"}>
                <img src={a3} /> 
                <img src={a3} /> 
                <img src={a3} />
            </marquee> 
            </div>);
  }
}

export default A2Down;