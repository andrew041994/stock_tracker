

export default function manageStocks(state = {
  stocks: []
}, action) {
      switch (action.type) {
        case 'LOAD_STOCKS':
          return {
            ...state,
            stocks: action.stocks,
          }        
      
        default:
          return state;
      }
      
  }
  