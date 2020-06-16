export const fetchStocks = () => {
	return (dispatch) => {
		// dispatch({type:'LOADING_STOCKS'})
		fetch("http://localhost:3000/stocks")
			.then((resp) => {
				return resp.json();
			})
			.then((resp) => {
				dispatch({ type: "LOAD_STOCKS", stocks: resp });
			});
	};
};

export const sendStock = (stockInfo, history) => {
	console.log(stockInfo.name);
	const stock = {
		stock: {
			name: stockInfo.name + "",
			amount: stockInfo.amount + "",
			purchase_price: stockInfo.purchasePrice + "",
			selling_price: stockInfo.sellingPrice + "",
		},
	};
	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(stock),
	};
	return (dispatch) => {
		fetch("http://localhost:3000/stocks", options)
			.then((resp) => resp.json())
			.then((data) => {
				dispatch(fetchStocks());
			});
	};
};
