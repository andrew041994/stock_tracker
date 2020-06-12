export const fetchStocks = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_STOCKS'})
        fetch("http://localhost:3000/stocks")
        .then(resp => resp.json())
        .then(resp => console.log(resp))
    }


}