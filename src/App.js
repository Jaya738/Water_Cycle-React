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
      sun : true ,
      cloud : false ,
      rain : false,
   }
}
Phase1() {
   this.setState({sun: true});
   this.setState({cloud : false});
   this.setState({rain: false});
 
 }
Phase2() {
   this.setState({sun: true});
   this.setState({cloud : true});
   this.setState({rain: false});

}
Phase3() {
   this.setState({sun: false});
   this.setState({cloud : true});
   this.setState({rain: true});

}
Phase4() {
   this.setState({sun: false});
   this.setState({cloud : true});
   this.setState({rain: true});

}
  render() {
    return (

   <div id="hero" className="Cycle" style={{backgroundImage:'url(' + Hill + ')'}}>

    <Row>
    <Col sm={10}>
    <Container className='Container'>
     
      <Row justify='start'>
      {
          this.state.rain ?  <ReactRain numDrops="1000"></ReactRain> : null
        }
               
      </Row>

      
      <Row>
      
         <Col xs={0.4} sm={0.4}>
         
        {
          this.state.sun ? <Sun /> : null
        }
         </Col>
         
         <Col xs={2} sm={2}>
         {
          this.state.cloud ? <Cloud5 /> : null
        }
         {
          this.state.cloud ? <Cloud2 /> : null
        }
          </Col>

          <Col xs={1} sm={1}>
          {
          this.state.cloud ? <Cloud2 /> : null
        }
         {
          this.state.cloud ? <Cloud /> : null
        }
          </Col>

           <Col  xs={4} sm={4}>
           {
          this.state.cloud ? <Cloud /> : null
        }            
             
           </Col>
       </Row>

       
       
      <Row>
          <Col xs={8}> </Col>

           <Col>
           
           </Col>
      </Row>
    
    </Container>
    </Col>
    <Col sm={2}>

    <Row>
          
           <Col sm={12} xs={12}>
           {
          <Button onClick={() => this.Phase1()} className="B2"> Evaporation </Button> 
            }
            </Col>
          <Col sm={12} xs={12}>
          {
           <Button onClick={() => this.Phase2()} className="B2"> Condensation </Button>
          } 
           </Col>
           <Col sm={12} xs={12}>
           {
           <Button onClick={() => this.Phase3()} className="B2"> Precipitation </Button>
            }
           
           </Col>
           <Col sm={12} xs={12}>
           {
          <Button onClick={() => this.Phase4()} className="B2"> Collection </Button>
            }
          
           </Col>
       </Row>
      </Col>
      </Row>
   </div>
   
   
  

    );
  }
}
export default App;
