import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Cloud from './components/Cloud';
import Sun from './components/Bird';
import Mountain from './components/Bird';

class App extends Component {
  render() {
    return (
 <div>
        
  <Container>
  <Row>
    <Col sm={4} xs={12} md={4} >
        <Cloud />
    </Col>
    <Col sm={4} xs={12} md={4}> 
        <Mountain />
    </Col>
    <Col sm={4} xs={12} md={4}>
      <Sun />
    </Col>
  </Row>
  </Container>
      </div>
    );
  }
}
export default App;
