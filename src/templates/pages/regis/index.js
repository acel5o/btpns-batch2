import React, { Component } from 'react';
import {Label,Input,Container} from "../../../components"
import "./style.css"
import { connect } from "react-redux"


class Regis extends Component {
    constructor(props) {
        super(props);
        this.state = 
        {
            username :"",
            name :"",
            password :"",
            role :"admin"
        }
    }

    // untuk perubahan input
    onInputChange = e => {
        // e adalah event bawaan
        this.setState({
            [e.target.name]: e.target.value
        })
        
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

// const mapDispatchToProps = (dispatch) => ({
//     doRegist: (dataRegister) => dispatch({ type: "REGISTER", payload: {dataRegister}}),
// })

export default connect(mapStateToProps)(Regis)