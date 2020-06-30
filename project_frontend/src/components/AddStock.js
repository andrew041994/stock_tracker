import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button'

class AddStock extends Component {

    render() {
        return (
            <div style={{"margin": "auto",
            "width": "20%",
            "padding": "10px",
            "color": "white"}} >
                <Link to="/add-stock">
                <button variant="info">
                     Add Stock
                     </button>
                     </Link>
            </div>
        );
    }
}

export default AddStock;
