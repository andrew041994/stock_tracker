import React, { Component } from 'react';

class StockForm extends Component {
    render() {
        return (
            <div style={{"margin": "auto",                 
            "width": "20%",
            "padding": "30px"
            }}>
                <h1 style={{"color": "green"}}>Create a New Stock</h1>
            <form >
              <h3>Stock Name</h3>
                <input type="text" name="name"/>
                <h3> Amount of Stock Purchased</h3>
                <input type="number" />
                <h3>Purchase Price per Stock</h3>
                <input type="number" step="any" />
                <h3>Potential Selling Price</h3>
                <input type="number" step="any" />
                <h3>Review and Save Your Stock</h3>
                <input type="submit" />
            </form>

            </div>
        );
    }
}

export default StockForm;
