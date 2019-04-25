import React, { Component } from 'react';
import cloud from './images/c1.png';
import Cloud2 from './Cloud2.js';

import './App.css';
import 'react-marquee';


class Cloud extends Component {
    render() {
        return (
          <div>
               <marquee behavior={"scroll"} direction={"right"} scrollamount={"25"}> 
                   <Cloud2 />
               </marquee>

          </div> 
        );
    }
}
export default Cloud;