import React, { Component } from 'react';
import currencyFormatter from 'currency-formatter'

import { connect } from 'react-redux';
class ViewStock extends Component {
  render() {
    return (
        <div style={{"margin": "auto",
        "width": "20%",
        "padding": "10px",
        "color": "green"}} key={this.props.stock.id}>
          <h3>{this.props.stock.name}</h3>
          <h5>Amount:{this.props.stock.amount}</h5>
         
          <h5>Cost Per Share: {currencyFormatter.format(this.props.stock.purchase_price, {code: 'USD'})}</h5>
          <h5>Potential Selling Price: {currencyFormatter.format(this.props.stock.selling_price, {code: 'USD'})}</h5>
  
        </div>
    );
  }
}


const mapStateToProps = state => {
    return{
        stock: state
    }
}

export default connect(mapStateToProps)(ViewStock);
