

export default function manageStocks(state = {
  stocks: [], loading: false
}, action) {
    switch (action.type) {
      case 'LOADING_STOCKS':
      return {
        ...state,
        stocks: [...state.stocks],
        loading: true
      }
      case 'ADD_STOCKS':
        return state
    
      default:
        return state;
    }
      
  }
