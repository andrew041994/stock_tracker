import React, { Component } from 'react';
import { fetchStocks } from '../actions/stockActions';
import currencyFormatter from 'currency-formatter'

import { connect } from 'react-redux';
class ViewStock extends Component {

  componentDidMount() {
  
    if (this.props.stocks.length === 0) {
   
      this.props.fetchStocks()
    } 
    
}



  render() {
    const stock = this.props.stocks.filter(stock => parseInt(stock.id, 10) === parseInt(this.props.match.params.stockId,10))[0]
    // console.log(stock)
      const view = stock?  <div style={{"margin": "auto",
      "width": "20%",
      "padding": "10px",
      "color": "green"}}>
        <h3>{stock.name}</h3>
        <h5>Amount:{stock.amount}</h5>
       
        <h5>Cost Per Share: {currencyFormatter.format(stock.purchase_price, {code: 'USD'})}</h5>
        <h5>Potential Selling Price: {currencyFormatter.format(stock.selling_price, {code: 'USD'})}</h5>
      </div>: null
      

    return (
        
          view ? view : null
        
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
      fetchStocks: () => dispatch(fetchStocks())
  }
}

const mapStateToProps = state => {
  return {
    stocks: state.stocks
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewStock);
