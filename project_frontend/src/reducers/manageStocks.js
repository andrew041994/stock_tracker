

export default function manageStocks(state = {
  stocks: [], loading: false
}, action) {
      switch (action.type) {
        case 'LOADING_STOCKS':
          return {
            ...state,
            stocks: [...state.stocks],
            loading:true
          }
        case 'LOAD_STOCKS':
          return {
            ...state,
            stocks: action.stocks,
            loading:false
          }
        // case 'GET_STOCK':
        //   console.log(action)
         
          
      
        default:
          return state;
      }
      
  }
  