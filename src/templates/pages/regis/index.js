import React, { Component } from 'react';
import {Label,Input,Container} from "../../../components"
import "./style.css"

class Regis extends Component {
    constructor(props) {
        super(props);
        this.state = 
        {
            admins:[],
            username :"",
            email :"",
            password :"",
            hak :""
        }
    }

    // untuk perubahan input
    onInputChange = e => {
        // e adalah event bawaan
        this.setState({
            [e.target.name]: e.target.value
        })
        
    }

    onRegis =  () => {
        const { email, password, username,hak} = this.state
        this.props.tambah({email,password,username,hak})
        
        // Cara Pertama ==> Get dulu data baru  masukin data
        // let oldUsers = this.state.users
        // oldUsers.push({
        //     name,
        //     email,
        //     password
        // }) 

        //  this.setState({
        //     users : oldUsers
        // })  

        // Cara Kedua
        // await this.setState(oldState => {
        //     let oldData = oldState.users
        //     oldData.push({name,email,password})
        // })
    }

    render() { 
        return (  
            <>
            <div className="judul">
                 REGISTRATION
            </div>
            <Container>
            <form className="daftar">
                <Label nmlabel="fname">Username</Label>
                <Input type="text" id="nama" name="username" onChange={this.onInputChange}/>
                <Label nmlabel="lname">Email</Label>
                <Input type="text" id="email" name="email" onChange={this.onInputChange}/>
                <Label nmlabel="lname">Password</Label>
                <Input type="password" id="password" name="password" onChange={this.onInputChange}/>
                <Input type="reset" value="Reset" name="ulang" />
                <Input type="button" value="Save" onClickInput={this.onRegis} />
            </form>
            </Container>
            </>
        );
    }
}
 
export default Regis;