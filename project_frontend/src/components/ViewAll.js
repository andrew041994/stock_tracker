import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ViewAll extends Component {


    render() {
        return(
            <div style={{"margin": "auto",
                 
            "width": "50%",
            "padding": "30px"
            }}><Link to="/stocks">
                <button style={{                 
                 "width": "40%",
                 "padding": "30px",
                 "color": "green"}}>
                     View All Stocks
                     </button>
                </Link>
            </div>
        )
    }
}

export default ViewAll;