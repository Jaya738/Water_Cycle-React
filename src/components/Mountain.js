import React, { Component } from 'react';
import mount from './images/pmount.gif'
class Mountain extends Component {
    render() {
        return (
           <div>
            <p>This is your Mountain Component</p>
            <img src={mount}/> 
            </div>
        );
    }
}
export default Mountain;