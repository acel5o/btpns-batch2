import React, { Component } from 'react';
import {Home,Regis,Login,User} from '../../templates';
import {Switch,Route} from "react-router-dom"

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            admins:[],
         }
    }

    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(json => this.setState({tampung : json}))    
    // }

    addUsers = obj =>{
        const {username,email,password,hak} = obj
        let oldUsers = this.state.admins
        if(username==="Bret"){
            oldUsers.push({
                username,
                email,
                password,
                hak:"admin"
            })
        }else{alert("Admin Hanya Bret")} 
         this.setState({
            admins : oldUsers
        })  
        console.log(this.state.admins);
    }

    Users = obj =>{
        const {username,email,password,hak} = obj
        let oldUsers = this.state.admins
        if(username!=="Bret"){
            oldUsers.push({
                username,
                email,
                password,
                hak:"user"
            })
        }else{alert("Gagal")} 
         this.setState({
            admins : oldUsers
        })  
        console.log(this.state.admins);
    }
    
    showPage = () => {
        const { changeLogin, statusLogin } = this.props
        // const { page } = this.props

        // if (page === "Home")
        //     return <Home />
        
        // if (page === "Regis")
        //     return <Regis tambah = {this.addUsers}/>
        
        // if (page === "Login")
        // return <Login changeLogin={this.props.changeLogin} listUsers={this.state.users}/>
        
        return <Switch>
                    <Route exact path="/" component={Regis}>
                        <Regis tambah = {this.addUsers}/>
                    </Route>
                    <Route path="/home" children={(props) => <Home {...props} statusLogin={statusLogin} />} />
                    <Route  path="/login" children={(props) => <Login {...props} statusLogin={statusLogin} 
                                                                                changeLogin={changeLogin}  
                                                                                listadmin={this.state.admins}
                                                                                />}>
                        {/* <Login changeLogin={this.props.changeLogin} listUsers={this.state.users} /> */}
                    </Route>
                    <Route path="/user" component={User}>
                        <User tambahuser = {this.Users}/>
                    </Route>
                    
                </Switch>
    }

    render() { 
        return ( 
            <>
            {
                this.showPage()
            }
        </>
         );
    }
}
 
export default Body;