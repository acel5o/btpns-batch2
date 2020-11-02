import React, {Component }from 'react';
import {Body,Nav} from "./templates"
import "./App.css"


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

    changeLogIn = () =>{
        this.setState(oldState=>({isLoggedIn:!oldState.isLoggedIn}))
    }

    doLogin = () => {
        this.setState({ isLoggedIn: true })
      }
    
    doLogout = () => {
        this.setState({ isLoggedIn: false })
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
export default App;