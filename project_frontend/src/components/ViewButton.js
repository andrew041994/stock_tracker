import React, { Component } from 'react';
import{ getStock} from '../actions/stockActions'
import { connect } from 'react-redux';

class ViewButton extends Component {

    handleClick = (e) => {
        e.preventDefault()
        this.props.getStock(this.props.stock.id)


    }


  render() {
    return (
      <div> 
          <a href={'/stocks/' + this.props.stock.id}>
        <button onClick={(event) => this.handleClick(event)}>View</button>    
        </a> 
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getStock: () => dispatch(getStock())
    }
}

export default connect(null, mapDispatchToProps)(ViewButton)
