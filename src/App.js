import React, { Component } from 'react';
import './components/App.css';
import {Button} from 'semantic-ui-react';
import { Container, Row, Col } from 'react-grid-system';

import Cloud from './components/Cloud';
import Cloud2 from './components/Cloud2';
import Cloud3 from './components/Cloud3';
import Cloud4 from './components/Cloud4';
import Cloud5 from './components/Cloud5';
import Hill from './components/images/bcollection.png';
import Mountain from './components/Mountain';
import Sun from './components/Sun';
import Bird from './components/images/Bird.gif';
import A1up from './components/A1up';
import ReactRain from 'react-rain-animation';
import "react-rain-animation/lib/style.css";
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import P1 from './components/images/p1.png';
import P2 from './components/images/p2.png';
import P3 from './components/images/p3.png';
import P4 from './components/images/p4.png';


class App extends Component {
   constructor(){
      super();
    this.state = {
      sun : false ,
      cloud : false ,
      rain : false,
      arrow : false,
   }
}
Phase1() {
   this.setState({sun: true});
   this.setState({cloud : false});
   this.setState({rain: false});
   this.setState({arrow: true});
 
 }
Phase2() {
   this.setState({sun: true});
   this.setState({cloud : true});
   this.setState({rain: false});
   this.setState({arrow: false});

}
Phase3() {
   this.setState({sun: false});
   this.setState({cloud : true});
   this.setState({rain: true});
   this.setState({arrow: false});

}
Phase4() {
   this.setState({sun: false});
   this.setState({cloud : true});
   this.setState({rain: false});
   this.setState({arrow: false });

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
           <Col xs={2}> 
             {this.state.arrow ? <A1up /> : null}
           </Col >

           <Col xs={2}>
           {this.state.arrow ? <A1up /> : null}
           </Col>

           <Col xs={2}>
            {this.state.arrow ? <A1up /> : null}
           </Col>

           <Col xs={2}>
            {this.state.arrow ? <A1up /> : null}
           </Col>

           <Col xs={2}>
            {this.state.arrow ? <A1up /> : null}
           </Col>
      </Row>


      <Row>
           <Col xs={2}> 
             {this.state.arrow ? <A1up /> : null}
           </Col >

           <Col xs={2}>
           {this.state.arrow ? <A1up /> : null}
           </Col>

           <Col xs={2}>
            {this.state.arrow ? <A1up /> : null}
           </Col>

           <Col xs={2}>
            {this.state.arrow ? <A1up /> : null}
           </Col>

           <Col xs={2}>
            {this.state.arrow ? <A1up /> : null}
           </Col>
      </Row>


      <Row>
           <Col xs={2}> 
             {this.state.arrow ? <A1up /> : null}
           </Col >

           <Col xs={2}>
           {this.state.arrow ? <A1up /> : null}
           </Col>

           <Col xs={2}>
            {this.state.arrow ? <A1up /> : null}
           </Col>

           <Col xs={2}>
            {this.state.arrow ? <A1up /> : null}
           </Col>

           <Col xs={2}>
            {this.state.arrow ? <A1up /> : null}
           </Col>
      </Row>
    
    </Container>
    </Col>
    <Col sm={2}>

    <Row>
          
           <Col sm={12} xs={12}>
           {
          <Button className='B2' onClick={() => this.Phase1()}>
              <Flippy    
                style={{ width: '290px', height: '238px' }}          
                flipOnHover={false} // default false
                flipOnClick={true} // default false
                flipDirection="horizontal" // horizontal or vertical
                ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                                           // if you pass isFlipped prop component will be controlled component.
                                           // and other props, which will go to div
                                           /// these are optional style, it is not necessary 
               >
    
                <FrontSide style={{backgroundColor: '#B0E0E6',borderWidth: '2px',borderStyle: 'solid',borderColor: 'orange'}}>
                    <img src={P1} style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </FrontSide>
         
                <BackSide style={{ backgroundColor: '#175852'}}>  DATA </BackSide>
             
            </Flippy> 
          </Button>
            
            }
            </Col>
          <Col sm={12} xs={12}>
          {
           <Button onClick={() => this.Phase2()} className="B2"> 
                <Flippy    
                style={{ width: '290px', height: '238px' }}          
                flipOnHover={false} // default false
                flipOnClick={true} // default false
                flipDirection="horizontal" // horizontal or vertical
                ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                                           // if you pass isFlipped prop component will be controlled component.
                                           // and other props, which will go to div
                                           /// these are optional style, it is not necessary 
               >
    
                <FrontSide style={{backgroundColor: '#B0E0E6',borderWidth: '2px',borderStyle: 'solid',borderColor: 'orange'}}>  
                   <img src={P2} style={{maxWidth:'100%' ,maxHeight:'100%'}} />  
                </FrontSide>
         
                <BackSide style={{ backgroundColor: '#175852'}}>  DATA </BackSide>
             
            </Flippy> 
           </Button>
          } 
           </Col>
           <Col sm={12} xs={12}>
           {
           <Button onClick={() => this.Phase3()} className="B2">  
                <Flippy    
                style={{ width: '290px', height: '238px' }}          
                flipOnHover={false} // default false
                flipOnClick={true} // default false
                flipDirection="horizontal" // horizontal or vertical
                ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                                           // if you pass isFlipped prop component will be controlled component.
                                           // and other props, which will go to div
                                           /// these are optional style, it is not necessary 
               >
    
                <FrontSide style={{backgroundColor: '#B0E0E6',borderWidth: '2px',borderStyle: 'solid',borderColor: 'orange'}}>  
                    <img src={P3} style={{ maxWidth: '100%', maxHeight: '100%' }} /> 
                </FrontSide>
         
                <BackSide style={{ backgroundColor: '#175852'}}>  DATA </BackSide>
             
            </Flippy>
           </Button>
            }
           
           </Col>
           <Col sm={12} xs={12}>
           {
          <Button onClick={() => this.Phase4()} className="B2"> 
              <Flippy    
                style={{ width: '290px', height: '238px' }}          
                flipOnHover={false} // default false
                flipOnClick={true} // default false
                flipDirection="horizontal" // horizontal or vertical
                ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                                           // if you pass isFlipped prop component will be controlled component.
                                           // and other props, which will go to div
                                           /// these are optional style, it is not necessary 
               >
    
                <FrontSide style={{backgroundColor: '#B0E0E6',borderWidth: '2px',borderStyle: 'solid',borderColor: 'orange'}}>  
                    <img src={P4} style={{ maxWidth: '100%', maxHeight: '100%' }} /> 
                </FrontSide>
         
                <BackSide style={{ backgroundColor: '#175852'}}>  DATA </BackSide>
             
            </Flippy>
            </Button>
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
