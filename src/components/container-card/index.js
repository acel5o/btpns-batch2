import React, { Component } from 'react';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container-card">
            {this.props.children}
            </div>
         );
    }
}
 
export default Container;