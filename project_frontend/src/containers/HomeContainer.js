import React, { Component } from 'react';
import ViewAll from '../components/ViewAll'
import TrendingStock from '../components/TrendingStock'
import { fetchStocks } from '../actions/stockActions';
import { connect } from 'react-redux';

class HomeContainer extends Component {

componentDidMount() {
    this.props.fetchStocks
}


    render() {
        return(
            <div>
                <h1 style={{"margin": "auto",
                "width": "50%",
                "padding": "30px",
                "color": "green"}}> Welcome To Stock Tracker</h1>
               < ViewAll stocks={this.props.stocks}/>
               <TrendingStock />
            </div>
        )
    }
}
const mapStateToProps = state => {
    return{
        stocks: state.stocks,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchStocks: () => dispatch(fetchStocks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);