import React, { Component } from 'react';
import AddStock from './AddStock';
import StockTape from './StockTape';

export default class AllStocks extends Component {
  render() {
    return (
        <div> 
          <StockTape />
          
          <AddStock />
        
        <li>list all stocks here </li>
       
      </div>
    );
  }
}
