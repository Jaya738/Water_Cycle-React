import React, { Component } from 'react';
import './button.css';
import {Link} from 'react-router-dom';
import posed from 'react-pose';
import P1 from './ReusableComponents/images/p1.png';
import P2 from './ReusableComponents/images/p2.png';
import P3 from './ReusableComponents/images/p3.png';
import P4 from './ReusableComponents/images/p4.png';

import { Container, Row, Col } from 'react-grid-system';

class Button extends Component {
    render() {

        const Sidebar = posed.div({
            exit: {
              x: '-100%'
            }, 
            enter: {
              x: '0%',
              beforeChildren: true,
              staggerChildren: 50
            }
          });
          
          const charPoses = {
            exit: { opacity: 0 },
            enter: { opacity: 1 }
          };

        return (
        <div className="container">
         <Sidebar class="sidebar" initialPose="exit" pose="enter">
              
           <Row>
             <Link to= 'evaporation'> <button class="Button" > <img src={P1} style={{ maxWidth: '100%', maxHeight: '100%' }}/></button> </Link>
           </Row>

           <Row>
             <Link to= 'condensation'>  <button class="Button" > <img src={P2} style={{ maxWidth: '100%', maxHeight: '100%' }}/></button>  </Link>
           </Row>

         
           <Row>
             <Link to= 'precepetation'> <button class="Button" > <img src={P3} style={{ maxWidth: '100%', maxHeight: '100%' }}/></button>  </Link> 
           </Row>

           <Row>
             <Link to= 'collection'>  <button class="Button" > <img src={P4} style={{ maxWidth: '100%', maxHeight: '100%' }}/></button>  </Link>  
           </Row>

                     
         </Sidebar>
        </div>
        );
    }
}
export default Button;