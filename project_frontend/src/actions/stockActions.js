

export const fetchStocks = () => {
    return (dispatch) => {
        dispatch({type:'LOADING_STOCKS'})
        fetch("http://localhost:3000/stocks")
        .then(resp => resp.json())
        .then(resp => {dispatch({type:'ADD_STOCKS', stocks: resp})})
    }


}

export const getStock = (id) => {
    return {type: 'GET_STOCK', id:id}
}