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
    
    onInputChange = e => {
            this.setState({
            [e.target.name]: e.target.value
        })
    }

    onLogin = () => {
        const { username, password } = this.state
        if (username && password){    
            let statusLogin = this.props.userList.find(user => (user.username === username && user.password === password))
            if (statusLogin){
                window.alert('Berhasil Login!')
                let role = statusLogin.role
                this.props.doLogin({username,password,role})     
            }else {
                window.alert('Password atau Username Tidak Sesuai')
            }
          }
          else {
              window.alert("Username dan Password tidak boleh kosong!")
          }
        }
    

    

    render() { 
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
                <Input type="button" value="Login" onClickInput={this.onLogin}/>
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