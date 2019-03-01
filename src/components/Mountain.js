import React, { Component } from 'react';
import mount from './images/hill.png'
import './App.css';
class Mountain extends Component {
    render() {
        return (
           <div>
            <img className="Mountain" src={mount}/> 
            </div>
        );
    }
}
export default Mountain;