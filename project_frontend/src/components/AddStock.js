import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddStock extends Component {

  


    render() {
        return (
            <div style={{"margin": "auto",                 
            "width": "20%",
            "padding": "30px"
            }}>
                <Link to="/add-stock">
                <button style={{                 
                 "width": "auto",
                 "padding": "30px",
                 "color": "green"}}>
                     Add Stock
                     </button>
                     </Link>
            </div>
        );
    }
}

export default AddStock;
