import React from "react";
import MainContainer from "./containers/MainContainer";
import { Route, Switch} from "react-router-dom";
import AllStocks from "./components/AllStocks";
import StockForm from "./components/StockForm";
import ViewStock from "./components/ViewStock";

function App() {
  const NotFound = () => {
    return (
      <div style={{"margin": "auto",                 
      "width": "50%",
      "padding": "30px"
      }}>
            <h2>
            404 - Not Found<br/>
            <a href="/">Return Home</a>
            </h2>
            </div>
           
    )
      
  }
	return (
    <Switch>

      <Route component={MainContainer} exact path="/" />      
      <Route component={AllStocks} exact path="/stocks" />
      <Route component={StockForm} exact path="/add-stock" />
      <Route component={ViewStock} exact path={`/stocks/:stockId`}/>
      <Route path='*' component={NotFound}  />
    </Switch>
  
	);
}

export default App;
