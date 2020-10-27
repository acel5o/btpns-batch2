import React, { Component } from 'react';
import {Label,Input,Container,Tabel,Tr} from "../../../components"
// import {Regis} from "../../../templates"
import "./style.css"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            tampung:[]
         }
    }
    
    onInputChange = e => {
            this.setState({
            [e.target.name]: e.target.value
        })
    }

    onLogin = () => {
        const {username,password} = this.state
        const ada = this.props.listadmin.find(user => (user.username === username &&  user.password === password && user.hak==="admin"))
        const ida = this.props.listadmin.find(user => (user.username === username &&  user.password === password && user.hak==="user"))
        if(ada) {
            alert(`Welcome Admin`)
            this.props.changeLogin()
        }else if(ida){
            alert(`Welcome User`)
            this.props.changeLogin()
        }else{alert("Gagal Login")}
    }
    
    async componentDidMount(){
        await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => this.setState({tampung : json}))    
        console.log(this.state.tampung);
    }

    render() { 

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
            <Tabel>
                {this.props.statusLogin?
                <tbody>
                       { 
                       this.state.tampung.map((user,idx) => {
                                   return <tr key={idx}>
                                      <td>{user.id}</td>
                                      <td>{user.name}</td>
                                      <td>{user.username}</td>
                                      <td>{user.email}</td>
                                      <td>
                                          <><button>Detail</button>
                                          <button>Edit</button>
                                          <button>Delete</button></>
                                      </td>
                                    </tr>
                         })
                        }
              </tbody> : 
                         <></>
                    }
              </Tabel>      
            </>
         );
    }
}
 
export default Login;