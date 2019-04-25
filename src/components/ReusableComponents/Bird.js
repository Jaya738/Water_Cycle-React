import React, { Component } from 'react';
import bird from './images/Bird.gif';


import './App.css';
import 'react-marquee';


class Bird extends Component {
    render() {
        return (
    
               <marquee behavior={"scroll"} direction={"left"} scrollamount={"25"}> 
                   <img  src={bird}/>
                  

                </marquee>

        );
    }
}
export default Bird;