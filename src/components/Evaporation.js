import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Sun from './ReusableComponents/Sun.js';
import Cloud2 from './ReusableComponents/Cloud2.js';
import A1up from './ReusableComponents/A1up.js';
import Hill from './ReusableComponents/images/bcollection.png';
import './App.css';



class Evaporation extends Component {
    render() {
        return (
        <div id="hero" className="Cycle" style={{backgroundImage:'url(' + Hill + ')'}}>
           
           <Row>
               <Col xs={2}> <Sun /> </Col>
               <Col xs={3}> <Cloud2 /> </Col>
               <Col xs={2}> <Cloud2 /> </Col>
           </Row>
                <Row>
               
               <Col xs={3}> <Cloud2 /> </Col>
               <Col xs={1}> <Cloud2 /> </Col>
           </Row>

           <Row>
                 <A1up />
                 <A1up />
                 <A1up />
                 <A1up />
                 <A1up />
                 <A1up />

           </Row>    

        </div> 
        );
    }
}
export default Evaporation;