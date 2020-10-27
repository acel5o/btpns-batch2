import React, { Component } from 'react';
import "./style.css"

class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="img-react" >
                <img src={this.props.gambar} alt=""/>
            </div>
         );
    }
}
 
export default Image;