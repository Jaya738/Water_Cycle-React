import React, { Component } from 'react';
import './components/App.css';
import {Button} from 'semantic-ui-react';
import { Container, Row, Col } from 'react-grid-system';

import Cloud from './components/Cloud';
import Cloud2 from './components/Cloud2';
import Cloud3 from './components/Cloud3';
import Cloud4 from './components/Cloud4';
import Cloud5 from './components/Cloud5';
import Hill from './components/images/Background.png';
import Mountain from './components/Mountain';
import Sun from './components/Sun';
import Bird from './components/images/Bird.gif';
import A1up from './components/A1up';
import ReactRain from 'react-rain-animation';
import "react-rain-animation/lib/style.css";


class App extends Component {
   constructor(){
      super();
    this.state = {
      childVisible: false
   }
}
onClick() {
   this.setState({childVisible: !this.state.childVisible});
 }
  render() {
    return (

   <div id="hero" className="Cycle" style={{backgroundImage:'url(' + Hill + ')'}}>

    
    <Container className='Container'>
    
      <Row justify='start'>
        
        <Col xs={4} >
          <h1 className='Body'>aaaaaaaaaaaaaa</h1>
        </Col>
        
        <Col xs={4}>
          <h1 className='Body'>aaaaaaaaaaaaaa</h1>
        </Col>

        <Col xs={4} >
        
          <h1 className='Body'>aaaaaaaaaaaaaa</h1>
          <ReactRain numDrops="1000"></ReactRain>
        </Col>
       
      </Row>

      
      <Row>
      
         <Col  xs={0.4}>
         
        {
          this.state.childVisible ? <Sun /> : null
        }
         </Col>
         
         <Col  xs={2}>
            <Cloud5 />
            <Cloud2 />
          </Col>

          <Col xs={1}>
             <Cloud2 />
             <Cloud />
          </Col>

           <Col  xs={4} >
              <Cloud />
               
             
           </Col>
       </Row>

       
       
      <Row>
          <Col xs={8}> </Col>

           <Col>
           
           </Col>
      </Row>


      
      <Row>
           <Col xs={8}>   </Col>

           <Col>
           <Button onClick={() => this.onClick()} className="B2"> Hide/Show Sun </Button>
                      </Col>

       </Row>

       <Row>
           <Col xs={8}> </Col>

           <Col>
              <Button className="B2">PHASE  2</Button>
           </Col>

       </Row>

       
       
       <Row>
           <Col xs={8}> </Col>

           <Col>
              <Button className="B2">PHASE  3</Button>
           </Col>
        </Row>

       
       
       <Row>
           <Col xs={8}>  </Col>

           <Col>
              <Button className="B2">PHASE  4</Button>
           </Col>
        </Row>

       
       
       <Row>
           <Col xs={8}>
           
           </Col>

           <Col>
              <Button className="B2">PHASE-5</Button>
           </Col>
        </Row>


        <Row>
           <Col xs={8}>  </Col>

           <Col>
              <Button className="B1"></Button>
           </Col>
        </Row>
         
    </Container>
    
   </div>
   
   
  

    );
  }
}
export default App;
