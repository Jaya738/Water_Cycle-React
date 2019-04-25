
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Cloud from './ReusableComponents/Cloud.js';
import Cloud2 from './ReusableComponents/Cloud2.js';
import Hill from './ReusableComponents/images/bcollection.png';
import ReactRain from 'react-rain-animation';
import './App.css';



class Precepetation extends Component { 
    render() {
        return (
        <div id="hero" className="Cycle" style={{backgroundImage:'url(' + Hill + ')'}}>
          
                <Row>
                    
                      <Col xs={5}>
                        
                      </Col>

                      <Col xs={5}>
                        <ReactRain numDrops="1000" />
                     </Col>
                    
                   <Col xs={12}>
                      <Col xs={12}><Cloud2 /></Col>
                      <Col xs={10}><Cloud2 /></Col>
                   </Col>
                   <Col xs={12}><Cloud2 /></Col>
                   
                </Row>
                
                 
        </div> 
        );
    }
}
export default Precepetation;