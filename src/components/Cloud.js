import React, { Component } from 'react';
import cloud from './images/c1.png';
import './App.css';


class Cloud extends Component {
    render() {
        return (
          <div>
                <img className="Cloud" src={cloud}/>

          </div> 
        );
    }
}
export default Cloud;