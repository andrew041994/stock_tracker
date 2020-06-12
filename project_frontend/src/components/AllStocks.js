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
    console.log(this.props.stocks)
    return (
        <div> 
          <StockTape />          
          <AddStock />

          {this.props.stocks.map(stock => <StockCard key={stock.id} stock={stock}/>)}
        
        <li>list all stocks here </li>
       
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
    stocks: state.stocks,
    loading: state.loading
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllStocks);