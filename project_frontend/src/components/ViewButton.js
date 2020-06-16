import React, { Component } from 'react';
// import{ getStock} from '../actions/stockActions'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'


class ViewButton extends Component {

    // handleClick = (e) => {
    // // e.preventDefault()
    //     // console.log(this.props.stock)
    //     this.props.getStock(this.props.stock.id)


    // }


  render() {
    return (
      <div> 
        <Link to={'/stocks/' + this.props.stock.id}>
        <button >View</button>    
        </Link>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getStock: (id) => dispatch(getStock(id))
//     }
// }

export default ViewButton
