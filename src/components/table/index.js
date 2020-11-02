import React, { Component } from 'react';
import {Tr} from "../../components"
class Tabel extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <center>
            <table className="table1">
                <thead>
                <Tr>
                    <th>Username</th>
                    <th>Name</th>
                    <th>Roles</th>
                    <th>Action</th>
                </Tr>
                </thead>
                {this.props.children}
            </table>
            </center>
         );
    }
}
 
export default Tabel;