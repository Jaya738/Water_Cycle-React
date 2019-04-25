
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Sun from './ReusableComponents/Sun.js';
import Cloud from './ReusableComponents/Cloud.js';
import Hill from './ReusableComponents/images/bcollection.png';
import './App.css';



class Evaporation extends Component {
    render() {
        return (
        <div id="hero" className="Cycle" style={{backgroundImage:'url(' + Hill + ')'}}>

                <Row>
                    
                     <Sun />

                    
                   <Col xs={12}><Cloud /></Col>
                   <Col xs={12}><Cloud /></Col>
                   
                </Row> 

        </div> 
        );
    }
}
export default Evaporation;