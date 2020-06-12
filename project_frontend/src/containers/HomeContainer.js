import React, { Component } from 'react';
import ViewAll from '../components/ViewAll'
import TrendingStock from '../components/TrendingStock'


class HomeContainer extends Component {




    render() {
        return(
            <div>
                <h1 style={{"margin": "auto",
                "width": "50%",
                "padding": "30px",
                "color": "green"}}> Welcome To Stock Tracker</h1>
               < ViewAll />
               <TrendingStock />
            </div>
        )
    }
}




export default HomeContainer;