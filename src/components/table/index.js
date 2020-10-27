import React, { Component } from 'react';
import {Tr,Td} from "../../components"
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
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
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