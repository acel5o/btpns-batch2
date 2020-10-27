import React, { Component } from 'react';
import "./style.css" 

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div onClick={this.props.goToPage} className="nav-menu" >
                {this.props.text}
            </div>
        );
    }
}
 
export default Menu;