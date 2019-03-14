import React, { Component } from 'react';
import cloud from './images/c1.png';
import cloud5 from './images/c6.png';

import './App.css';
import 'react-marquee';


class Cloud extends Component {
    render() {
        return (
          <div>
               <marquee behavior={"slide"} direction={"right"} scrollamount={"25"}> 
                   <img className="Cloud" src={cloud}/>
                   <img className="Cloud" src={cloud}/>

                </marquee>

          </div> 
        );
    }
}
export default Cloud;