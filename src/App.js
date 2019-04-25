import React, { Component } from 'react';
import './components/App.css';
import Button from './components/Button';
import { Container, Row, Col } from 'react-grid-system';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from './components/Home.js';
import Evaporation from './components/Evaporation.js';
import Precepetation from './components/Precepetation.js';
import Condensation from './components/Condensation.js';
import Collection from './components/Collection.js';
import "react-rain-animation/lib/style.css";
import Delay from 'react-delay';

class App extends Component {
   render(){
      return(
         <BrowserRouter>
          
         <Row> 
           <Col xs={10}>
            <Switch>
               <Route path="/home" component={Home} />
               <Route path="/evaporation" component={Evaporation} />
               <Route path="/condensation" component={Condensation} />
               <Route path="/precepetation" component={Precepetation} />
               <Route path="/collection" component={Collection} />
               <Redirect to="/home" />
            </Switch>
          </Col>
          
         <Col xs={2}>
           <Button /> 
         </Col>
        </Row>
      </BrowserRouter>
    
    );
  }
}
export default App;
