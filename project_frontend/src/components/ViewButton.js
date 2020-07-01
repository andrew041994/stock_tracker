import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'


class ViewButton extends Component {

   


  render() {
    return (
      <div> 
        <Link to={'/stocks/' + this.props.stock.id}>
        <Button variant="info">View Stock</Button>   
        </Link>
      </div>
    );
  }
}



export default ViewButton
