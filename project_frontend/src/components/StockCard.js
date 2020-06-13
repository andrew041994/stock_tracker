import React, { Component } from 'react';

import ViewButton from './ViewButton';
export default class StockCard extends Component {
  render() {
   
    return (
      <div style={{"margin": "auto",
      "width": "20%",
      "padding": "10px",
      "color": "green"}} key={this.props.stock.id}>
        <h3>{this.props.stock.name}</h3>
        <h5>Amount:{this.props.stock.amount}</h5>
        <ViewButton stock={this.props.stock}/>
       
      </div>
    );
  }
}
