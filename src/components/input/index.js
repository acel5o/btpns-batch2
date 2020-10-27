import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <input type={this.props.type} value={this.props.value} name={this.props.name} 
            id={this.props.id} onChange={this.props.onChange} onClick={this.props.onClickInput}
            />
         );
    }
}
 
export default Input;