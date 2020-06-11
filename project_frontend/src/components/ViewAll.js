import React, { Component } from 'react';

class ViewAll extends Component {


    render() {
        return(
            <div style={{"margin": "auto",
                 
            "width": "50%",
            "padding": "30px"
            }}><a href="/all-stocks">
                <button style={{                 
                 "width": "40%",
                 "padding": "30px",
                 "color": "green"}}>
                     View All Stocks
                     </button>
            </a>
            </div>
        )
    }
}

export default ViewAll;