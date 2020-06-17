

export default function manageStocks(state = {
  stocks: [], loading: false, message: ""
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
        case 'ADD_MESSAGE':
          return { 
              ...state,
              message: action.message
          }
         
          
      
        default:
          return state;
      }
      
  }
  