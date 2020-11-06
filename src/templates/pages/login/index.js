import React, { Component } from 'react';
import {Label,Input,Container} from "../../../components"
import "./style.css"
import { connect } from "react-redux"
import {Redirect} from "react-router-dom"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:"",
            password:""
         }
    }

//     componentDidMount(){
//         fetch('http://localhost:3001/data')
//        .then(response => response.json())
//        .then(json => this.setState({tampung1:json}))
//    }
    
    onInputChange = e => {
            this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.value);
    }

    doLogin = async (data) =>{
        console.log(data);
         await fetch('http://localhost:3001/auth/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
                
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            console.log(result);
            window.alert(result.message)
            const dataUser = result.data[0].dataUser
            const token = result.data[0].token
            console.log(dataUser);
            this.props.doLogin({dataUser,token})
        })
        .catch(error => console.log('error', error));
    }

    // onLogin = () => {
    //     const { username, password } = this.state
    //     if (username && password){    
    //         let statusLogin = this.state.tampung1.find(user => (user.username === username && user.password === password))
    //         if (statusLogin){
    //             window.alert('Berhasil Login!')
    //             let role = statusLogin.role
    //             this.props.doLogin({username,password,role})     
    //         }else {
    //             window.alert('Password atau Username Tidak Sesuai')
    //         }
    //       }
    //       else {
    //           window.alert("Username dan Password tidak boleh kosong!")
    //       }
    //     }
    
    render() { 
    const {username,password} = this.state
    if (this.props.statusLogin)
        return <Redirect to="/home" />

        return ( 
            <>
            <div className="judul">
                 LOGIN FORM
            </div>
            <Container>
            <form className="login">
                <Label nmlabel="lname">Username</Label>
                <Input type="text" id="email" name="username" onChange={this.onInputChange}/>
                <Label nmlabel="lname">Password</Label>
                <Input type="password" id="password" name="password" onChange={this.onInputChange}/>
                <Input type="reset" value="Reset" name="ulang" />
                <Input type="button" value="Login" onClickInput={() => { this.doLogin({username,password})}}/>
            </form>
            </Container>
            {/* <Tabel>
                {this.props.statusLogin?
                <tbody>
                       { 
                       this.props.userList.map((user,idx) => {
                               return <tr key={idx}>
                                      <td>{user.username}</td>
                                      <td>{user.name}</td>
                                      <td>{user.role}</td>
                                      <td>{this.props.dataLogin.role==="admin"?
                                          <><button>Detail</button>
                                          <button>Edit</button>
                                          <button>Delete</button></>
                                    :
                                          <><button>Detail</button>
                                          <button>Edit</button></>
                       }
                                      </td>
                                    </tr>
                         })
                        }
              </tbody> : 
                         <></>
                    }
              </Tabel>       */}
            </>
         );
    }
}
 
const mapStateToProps = (state) => {
    return {
        statusLogin: state.auth.isLoggedIn,
        userList : state.data.tampung,
        dataLogin : state.auth.dataLogin
    }
    
}

const mapDispatchToProps = (dispatch) => ({
    doLogin: (dataLogin) => dispatch({ type: "LOGIN", payload: {dataLogin}}),
})


export default connect(mapStateToProps, mapDispatchToProps)(Login)