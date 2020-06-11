import React, { Component } from 'react';

export default class StockTape extends Component {

    componentDidMount(){
        const myStyle = document.createElement("script")
        myStyle.src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"
        myStyle.async=true
        myStyle.innerHTML=JSON.stringify({
            "symbols": [
              {
                "proName": "FOREXCOM:SPXUSD",
                "title": "S&P 500"
              },
              {
                "proName": "FOREXCOM:NSXUSD",
                "title": "Nasdaq 100"
              },
              {
                "proName": "FX_IDC:EURUSD",
                "title": "EUR/USD"
              },
              {
                "proName": "BITSTAMP:BTCUSD",
                "title": "BTC/USD"
              },
              {
                "proName": "BITSTAMP:ETHUSD",
                "title": "ETH/USD"
              }
            ],
            "colorTheme": "dark",
            "isTransparent": false,
            "displayMode": "adaptive",
            "locale": "en"
          })
          document.getElementById("stock-tape").appendChild(myStyle)
    }

  render() {
    return (
      <div id="stock-tape" style={{                 
      "width": "100%",
      "padding": "0px"
      }}> 
      <div className="tradingview-widget-container">
        <div className="tradingview-widget-container__widget"></div>
        <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com" ></a></div>
      </div>
    </div>
    );
  }
}
