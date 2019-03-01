import React, {Component} from 'react';
import ReactRain from 'react-rain-animation';
import "react-rain-animation/lib/style.css";
class Rain{
    render(){
        return(
            <ReactRain numDrops="500" />
        );
    }
}
export default Rain;