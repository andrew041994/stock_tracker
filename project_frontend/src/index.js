import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import manageStocks from './reducers/manageStocks';
import 'bootstrap/dist/css/bootstrap.min.css';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(manageStocks, composeEnhancers(applyMiddleware(thunk)))


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <App />
    </Router>    
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


