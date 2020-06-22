export const fetchStocks = () => {
	return (dispatch) => {
		fetch("http://localhost:3000/stocks")
			.then((resp) => {
				return resp.json();
			})
			.then((resp) => {
				dispatch({ type: "LOAD_STOCKS", stocks: resp });
			});
	};
};

export const sendStock = (stockInfo) => {
	
	const stock = {
		stock: {
			name: stockInfo.name + "",
			amount: stockInfo.amount + "",
			purchase_price: stockInfo.purchasePrice + "",
			selling_price: stockInfo.sellingPrice + "",
		},
	};
	
	return (dispatch) => {
        fetch("http://localhost:3000/stocks", 
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(stock)})
			.then((resp) => resp.json())
			.then((data) => {
				dispatch(fetchStocks());
			});
	};
};


export const deleteStock = (id) => {
    return () => {
        fetch(`http://localhost:3000/stocks/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
    }

}



