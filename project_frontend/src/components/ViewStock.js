import React, { Component } from 'react';
import { fetchStocks, deleteStock } from '../actions/stockActions';
// import Button from 'react-bootstrap/Button'
import currencyFormatter from 'currency-formatter'

import { connect } from 'react-redux';
class ViewStock extends Component {

  componentDidMount() {  
    if (this.props.stocks.length === 0) {   
      this.props.fetchStocks()     
    }     
}



 



handleDelete = (e) => {
  e.preventDefault()
 
    console.log(e.target.name)
    this.props.deleteStock(this.props.match.params.stockId)
    this.props.history.push("/stocks");
  // Message(e.target.name)
}

 

  render() {
 
    

    const stock = this.props.stocks.filter(stock => parseInt(stock.id, 10) === parseInt(this.props.match.params.stockId,10))[0]
    // console.log(stock)
      const view = stock ?  <div style={{"margin": "auto",
      "width": "30%",
      "padding": "70px",
      "color": "white"}}>
        <h3><strong>{stock.name}</strong></h3>
        <h5><strong>Amount: {stock.amount}</strong></h5>       
        <h5><strong>Cost Per Share: {currencyFormatter.format(stock.purchase_price, {code: 'USD'})}</strong></h5>
        <h5><strong>Potential Selling Price: {currencyFormatter.format(stock.selling_price, {code: 'USD'})}</strong></h5>
        <h5><strong>Potential ROI: {currencyFormatter.format(stock.selling_price *stock.amount, {code: 'USD'})}</strong></h5>
        <button name={stock.name} onClick={(e) => this.handleDelete(e)} >DELETE</button>
      </div>: null
      

    return (
        
          view ? view : null
        
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
      fetchStocks: () => dispatch(fetchStocks()),
      deleteStock: (id) => dispatch(deleteStock(id))
  }
}

const mapStateToProps = state => {
  return {
    stocks: state.stocks,
    message: state.message
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewStock);
