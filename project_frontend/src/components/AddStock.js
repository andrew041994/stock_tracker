import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
class AddStock extends Component {

  


    render() {
        return (
            <div style={{"margin": "auto",                 
            "width": "20%",
            "padding": "30px"
            }}>
                <Link to="/add-stock">
                <Button variant="info">
                     Add Stock
                     </Button>
                     </Link>
            </div>
        );
    }
}

export default AddStock;
