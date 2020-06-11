import React, { Component } from 'react';

class AddStock extends Component {
    render() {
        return (
            <div style={{"margin": "auto",                 
            "width": "20%",
            "padding": "30px"
            }}><a href="/add-stock">
                <button style={{                 
                 "width": "40%",
                 "padding": "30px",
                 "color": "green"}}>
                     Add Stock
                     </button>
            </a>
            </div>
        );
    }
}

export default AddStock;
