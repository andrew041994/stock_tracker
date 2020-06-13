import React, { Component } from 'react';
import{ getStock} from '../actions/stockActions'
import { connect } from 'react-redux';

class ViewButton extends Component {

    handleClick = (e) => {
    // e.preventDefault()
        // console.log(this.props.stock)
        this.props.getStock(this.props.stock.id)


    }


  render() {
    return (
      <div> 
          <a href={'/stocks/' + this.props.stock.id}>
        <button >View</button>    
        </a> 
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getStock: (id) => dispatch(getStock(id))
    }
}

export default connect(null, mapDispatchToProps)(ViewButton)
