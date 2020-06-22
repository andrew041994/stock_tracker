import React, { Component } from "react";
import { sendStock } from "../actions/stockActions";
import Button from 'react-bootstrap/Button'
import { connect } from "react-redux";

class StockForm extends Component {
	constructor() {
		super();
		this.state = {
			name: "",
			amount: 0,
			purchasePrice: 0.0,
			sellingPrice: 0.0,
		};
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.sendStock(this.state);
		this.props.history.push("/stocks");
		this.setState({
			name: "",
			amount: 0,
			purchasePrice: 0.0,
			sellingPrice: 0.0,
		});

		// console.log(JSON.stringify(this.state))
	}

	render() {
		// console.log(this.state.name)
		return (
			<div style={{ margin: "auto", width: "20%", padding: "30px" }}>
				<h1 style={{ color: "green" }}>Create a New Stock</h1>
				<form style={{ color: "white" }} onSubmit={(event) => this.handleSubmit(event)}>
					<h5>Stock Name</h5>
					<input
						type="text"
						value={this.state.name}
						onChange={(event) => {
							this.setState({ name: event.target.value });
						}}
						name="name"
					/>
					<h5> Amount of Stock Purchased</h5>
					<input
						type="number"
						min="0"
						value={this.state.amount}
						onChange={(event) => {
							this.setState({ amount: event.target.value });
						}}
					/>
					<h5>Purchase Price per Stock</h5>
					<input
						type="number"
						min="0"
						step="any"
						value={this.state.purchasePrice}
						onChange={(event) => {
							this.setState({ purchasePrice: event.target.value });
						}}
					/>
					<h5>Potential Selling Price</h5>
					<input
						type="number"
						min="0"
						step="any"
						value={this.state.sellingPrice}
						onChange={(event) => {
							this.setState({ sellingPrice: event.target.value });
						}}
					/>
					<h5>Review and Save Your Stock</h5>
					<Button type="submit">Submit</Button>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		sendStock: (stockInfo) => dispatch(sendStock(stockInfo)),
	};
};

export default connect(null, mapDispatchToProps)(StockForm);
