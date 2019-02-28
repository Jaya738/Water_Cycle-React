import React, { Component } from 'react';
import cloud from './images/cloud.gif';
class Cloud extends Component {
    render() {
        return (
          <div>
              <p>Cloud Component Edit Here</p>
              <img src={cloud}/>

          </div> 
        );
    }
}
export default Cloud;