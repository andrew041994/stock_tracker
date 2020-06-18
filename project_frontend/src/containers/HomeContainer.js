import React, { Component } from 'react';
import ViewAll from '../components/ViewAll'
import TrendingStock from '../components/TrendingStock'
import {Container, Row, Col} from 'react-bootstrap'


class HomeContainer extends Component {




    render() {
        return(
            <div  >
                <Container fluid>
                <br></br>
                <Row>
                 <Col md={{ span: 3, offset: 4 }} > <h3 text ="green">Welcome To Stock Tracker</h3></Col>                
                </Row>
                <Row>
                <Col md={{ span: 3, offset: 4 }} > < ViewAll /></Col>
                </Row>
                <Row>
                    <Col lg={{ span: 0, offset: 1 }}> <TrendingStock /></Col>

                </Row>
                
               
                </Container>
               
              
            </div>
        )
    }
}




export default HomeContainer;