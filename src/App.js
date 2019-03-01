import React, { Component } from 'react';
import './components/App.css';

import { Container, Row, Col } from 'react-grid-system';

import Cloud from './components/Cloud';

import Mountain from './components/Mountain';
import Sun from './components/Sun';
import Rain from './components/Rain';
import Button from './components/Button';

class App extends Component {
  render() {
    return (
 <div className='Cycle'>
   
        
  <Container className='Container' >
  <Row>
    <Col sm={4} xs={12} md={4} >
    <Button/>
    <Button/><br/><br/><br/>
        <Cloud />
        <Mountain />
    </Col>
    
    
    <Col sm={4} xs={12} md={4}> 
        <Cloud />
        <Cloud/><br/><br/>
    </Col>

    <Col sm={4} xs={12} md={4}>
     <Sun />
     <Cloud/>
    </Col>
    
  </Row>
  </Container>
      </div>
    );
  }
}
export default App;
