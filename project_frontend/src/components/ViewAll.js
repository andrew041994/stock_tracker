import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button'


class ViewAll extends Component {


    render() {
        return(
            <div style={{"margin": "auto",
                 
            "width": "50%",
            "padding": "30px"
            }}><Link to="/stocks">
                <button variant="info">View All Stocks</button>{' '}
                </Link>
            </div>
        )
    }
}

export default ViewAll;