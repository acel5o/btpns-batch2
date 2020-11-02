import React, {Component }from 'react';
import {Body,Nav} from "./templates"
import "./App.css"
import {connect} from "react-redux"


class App  extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLoggedIn :true,
            //page : "Home"
         }
    }



    // onClickButton = (page) =>{
    //     this.setState ({
    //         page
    //     })
    // }
  
    componentDidMount(){
        fetch('http://localhost:3001/data')
       .then(response => response.json())
       .then(json => this.props.doFetch(json))    
   }
    render() { 
        return (  
            <>
            <Nav 
                // statusLogin = {this.state.isLoggedIn}
                // changeLogin={this.changeLogIn}
            />
            <Body statusLogin = {this.state.isLoggedIn}  changeLogin={this.changeLogIn} page={this.state.page} />
            </>
        );
    }
}   
const mapDispatchToProps = (dispatch) => ({
    doFetch: (data) => dispatch({ type: "FETCH", payload: { tampung:data } }),
})
export default connect(null, mapDispatchToProps)(App);