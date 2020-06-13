

export const fetchStocks = () => {
    return (dispatch) => {
        dispatch({type:'LOADING_STOCKS'})
        return fetch("http://localhost:3000/stocks")
        .then(resp => {return resp.json()})
        .then(resp => {dispatch({type:'ADD_STOCKS', stocks: resp})})
    }


}

export const getStock = (id) => {
    console.log(id)
    return {
        type: 'GET_STOCK', id: id
    }
    }
