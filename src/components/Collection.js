import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Sun from './ReusableComponents/Sun.js';
import A2Left from './ReusableComponents/A2Left.js';
import Bird from './ReusableComponents/Bird.js'
import Hill from './ReusableComponents/images/bcollection.png';
import './App.css';



class Collection extends Component {
    render() {
        return (
        <div id="hero" className="Cycle" style={{backgroundImage:'url(' + Hill + ')'}}>
            <Sun />
            <Row align="center" style={{ height: '500px' }}>
                <Bird />
            </Row>

            <Row>
                <A2Left />
            </Row>
        </div> 
        );
    }
}
export default Collection;