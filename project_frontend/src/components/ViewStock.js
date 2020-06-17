import React, { Component } from 'react';
import { fetchStocks, deleteStock } from '../actions/stockActions';
import FlashMessage from 'react-flash-message'
import currencyFormatter from 'currency-formatter'

import { connect } from 'react-redux';
class ViewStock extends Component {

  componentDidMount() {  
    const Message = () => (
      <FlashMessage duration={5000}>
        <strong>I will disapper in 5 seconds!</strong>
      </FlashMessage>
    )

    if (this.props.stocks.length === 0) {   
      this.props.fetchStocks()
      // console.log(this.props.message)
     
    }     
}



 



handleDelete = (e) => {
  e.preventDefault()
 
    console.log(e.target.name)
    this.props.deleteStock(this.props.match.params.stockId)
    this.props.history.push("/stocks");
  Message(e.target.name)
}

 

  render() {
 
    

    const stock = this.props.stocks.filter(stock => parseInt(stock.id, 10) === parseInt(this.props.match.params.stockId,10))[0]
    // console.log(stock)
      const view = stock ?  <div style={{"margin": "auto",
      "width": "20%",
      "padding": "10px",
      "color": "green"}}>
        <h3>{stock.name}</h3>
        <h5>Amount:{stock.amount}</h5>       
        <h5>Cost Per Share: {currencyFormatter.format(stock.purchase_price, {code: 'USD'})}</h5>
        <h5>Potential Selling Price: {currencyFormatter.format(stock.selling_price, {code: 'USD'})}</h5>
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
