import React, { Component } from 'react';

class TrendingStock extends Component {

    componentDidMount(){
        const myStyle = document.createElement("script") 
            myStyle.src= "https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js"
            myStyle.async=true
            myStyle.innerHTML=JSON.stringify({
                "colorTheme": "dark",
                "dateRange": "12m",
                "exchange": "US",
                "showChart": true,
                "locale": "en",
                "largeChartUrl": "",
                "isTransparent": false,
                "width": "600",
                "height": "600",
                "plotLineColorGrowing": "rgba(33, 150, 243, 1)",
                "plotLineColorFalling": "rgba(33, 150, 243, 1)",
                "gridLineColor": "rgba(240, 243, 250, 1)",
                "scaleFontColor": "rgba(120, 123, 134, 1)",
                "belowLineFillColorGrowing": "rgba(33, 150, 243, 0.12)",
                "belowLineFillColorFalling": "rgba(33, 150, 243, 0.12)",
                "symbolActiveColor": "rgba(33, 150, 243, 0.12)"
              })

              document.getElementById("trending-stock").appendChild(myStyle)
        
    }

    render() {
        return(
            <div id="trending-stock" style={{"margin": "auto",                 
            "width": "50%",
            "padding": "30px"
            }}>
            
            <div className="tradingview-widget-container">
              <div className="tradingview-widget-container__widget"></div>
              <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/markets/stocks-usa/market-movers-gainers/" rel="noopener"></a></div>
     
</div>
</div>

           

        
        )
    }
}

export default TrendingStock;
