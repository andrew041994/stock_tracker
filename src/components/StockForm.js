import React, { Component } from 'react';

class StockForm extends Component {
    constructor() {
        super() 
        this.state = {
            name: "",
            amount: 0,
            purchasePrice: 0.00,
            sellingPrice: 0.00
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        
        console.log(this.state)
    }


    render() {
        // console.log(this.state.name)
        return (
            
            <div style={{"margin": "auto",                 
            "width": "20%",
            "padding": "30px"
            }}>
                <h1 style={{"color": "green"}}>Create a New Stock</h1>
            <form onSubmit={(event) => this.handleSubmit(event)}>
              <h3>Stock Name</h3>
                <input type="text" value={this.state.name} onChange={(event) => {this.setState({name: event.target.value})}} name="name"/>
                <h3> Amount of Stock Purchased</h3>
                <input type="number" min="0" value={this.state.amount} onChange={(event) => {this.setState({amount:event.target.value})}}/>
                <h3>Purchase Price per Stock</h3>
                <input type="number" min="0" step="any" value={this.state.purchasePrice} onChange={(event) => {this.setState({purchasePrice: event.target.value})}}/>
                <h3>Potential Selling Price</h3>
                <input type="number" min="0" step="any" value={this.state.sellingPrice} onChange={(event) => {this.setState({sellingPrice: event.target.value})}}/>
                <h3>Review and Save Your Stock</h3>
                <input type="submit" />
            </form>

            </div>
        );
    }
}

export default StockForm;
