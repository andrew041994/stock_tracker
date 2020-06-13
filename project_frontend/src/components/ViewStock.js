import React, { Component } from 'react';
import currencyFormatter from 'currency-formatter'

import { connect } from 'react-redux';
class ViewStock extends Component {



  render() {
      const stock = this.props.stocks.filter(stock => stock.id === this.props.match.params.stockId)
      console.log(this.props.stocks)
    return (
        <div style={{"margin": "auto",
        "width": "20%",
        "padding": "10px",
        "color": "green"}} key={stock.id}>
          <h3>{stock.name}</h3>
          {/* <h5>Amount:{this.props.stock.amount}</h5>
         
          <h5>Cost Per Share: {currencyFormatter.format(this.props.stock.purchase_price, {code: 'USD'})}</h5>
          <h5>Potential Selling Price: {currencyFormatter.format(this.props.stock.selling_price, {code: 'USD'})}</h5>
   */}
        </div>
    );
  }
}


const mapStateToProps = state => {
    console.log(state)
    return {
        stocks: state.stocks
    }
}

export default connect(mapStateToProps)(ViewStock);
