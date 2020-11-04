import React, { Component } from 'react';
import {Label,Input,Container} from "../../../components"
import "./style.css"
import { connect } from "react-redux"

class User extends Component {
    constructor(props) {
        super(props);
        this.state = 
        {
            username :"",
            name :"",
            password :"",
            role:"user"
        }
    }

    // untuk perubahan input
    onInputChange = e => {
        // e adalah event bawaan
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.name);
    }

    postData=(dataRegist)=>{
        fetch('http://localhost:3001/auth/register',{
            method : 'POST',
            headers :{
                Accept: 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(dataRegist)
        })
       .then(response => response.text())
    }

    onRegis =  () => {
        const {username,name,password,role} = this.state
        const UserList = this.props.userList.find(user => (user.username === username))
        if (username && password){   
            if (UserList){
                window.alert('Username sudah digunakan!');
            }else{
                    window.alert('Pendaftaran Berhasil!')
                    this.postData({username,name,password,role})
            }
        }
        else {
            window.alert("Username dan Password tidak boleh kosong!")
        }
    }

    render() { 
        return (  
            <>
            <div className="judul">
                 REGISTRATION USER
            </div>
            <Container>
            <form className="daftar">
                <Label nmlabel="fname">Username</Label>
                <Input type="text" id="nama" name="username" onChange={this.onInputChange}/>
                <Label nmlabel="lname">Name</Label>
                <Input type="text" id="name" name="name" onChange={this.onInputChange}/>
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

const mapStateToProps = (state) => {
    return {
        userList : state.data.tampung,
    }
    
}

const mapDispatchToProps = (dispatch) => ({
    doRegist: (dataRegister) => dispatch({ type: "REGISTER", payload: {dataRegister}}),
})

export default connect(mapStateToProps,mapDispatchToProps)(User)