import React, { Component } from 'react';
import ViewAll from '../components/ViewAll'
import TrendingStock from '../components/TrendingStock'
import {Container, Row, Col} from 'react-bootstrap'


class HomeContainer extends Component {




    render() {
        return(
            <div  style={{"padding": "30px"}} >
                <Container fluid>
                
                <Row>
                    <Col lg={{ span: 3, offset: 4 }} > <h3 style={{"margin": "auto", "width": "130%", "padding": "8px",
                      "color": "green"}}><strong>Welcome To Stock Tracker</strong></h3></Col>                
                </Row>
                <Row>
                    <Col md={{ span: 3, offset: 4 }} > < ViewAll /></Col>
                </Row>
                <Row >
                    <Col md={{ offset: 1 }}> 
                     <TrendingStock />                    
                    </Col> 

                </Row>
                
               
                </Container>
               
              
            </div>
        )
    }
}




export default HomeContainer;