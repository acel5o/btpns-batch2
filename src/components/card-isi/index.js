import React, { Component } from 'react';
import {Image} from "../index"
class CardIsi extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div className="isi-card">
            <Image  gambar={this.props.gambar}/>
                <h1><u>{this.props.title}</u></h1>
                <p>
                    {this.props.children}
                </p>
        </div>
         );
    }
}
 
export default CardIsi;