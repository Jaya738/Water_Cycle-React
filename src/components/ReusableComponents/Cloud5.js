import React, { Component } from 'react';
import cloud from './images/c1.png';
import cloud5 from './images/c6.png';

import './App.css';
import 'react-marquee';


class Cloud extends Component {
    render() {
        return (
          <div>
                   <img className="Cloud" src={cloud}/>
                   <img className="Cloud" src={cloud}/>

               

          </div> 
        );
    }
}
export default Cloud;