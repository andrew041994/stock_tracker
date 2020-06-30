import React, { Component } from 'react';
import AddStock from './AddStock';
import StockTape from './StockTape';
import StockCard from './StockCard';
import { connect } from 'react-redux';
import { fetchStocks } from '../actions/stockActions';



class AllStocks extends Component {

  componentDidMount() {
    this.props.fetchStocks()
}





  render() {
    console.log()
   
    return (
        <div> 
          <StockTape /> 
          <h3 style={{"margin": "auto",
      "width": "30%",
      "padding": "20px",
      "color": "white"}}><strong>Stocks You Currently Own:</strong></h3>          
          <AddStock />
         

          {this.props.stocks.map(stock => <StockCard key={stock.id} stock={stock}/>)}
       
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AllStocks);