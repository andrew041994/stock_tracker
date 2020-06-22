import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import ViewButton from './ViewButton';
export default class StockCard extends Component {
  
  render() {
   
    return (

      <div style={{"margin": "auto",
      "width": "20%",
      "padding": "10px",
      "color": "white"}} key={this.props.stock.id}>
       
        <h3><strong>{this.props.stock.name}</strong></h3> 
        <h4><strong>Amount:{this.props.stock.amount}</strong></h4>
        <ViewButton stock={this.props.stock}/>
        
      </div>
    );
  }
}
