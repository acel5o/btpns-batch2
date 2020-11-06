import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Label,Input,Container} from "../../../components"
import {Redirect} from 'react-router-dom'

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:"",
            name:"",
            password:"",
            role:"",
            lastusername:""
         }
    }

    componentDidMount = () =>{
        const indexUser = this.props.match.params.idx
        this.setState({
            username : this.props.userList[indexUser].username,
            name : this.props.userList[indexUser].name,
            role : this.props.userList[indexUser].role,
            lastusername : this.props.userList[indexUser].username,
        })
    }

    onChangeInput = e => {
        this.setState({        
            [e.target.name]:e.target.value
        })
        console.log(e.target.name);
    }

    editProfil = async(Obj,username) =>{
        console.log(Obj);
        await fetch('http://localhost:3001/users/edit/'+username, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer '+this.props.dataLogin.token
            },
            body: JSON.stringify(Obj)
        })
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

    render() { 
        const {username,name,role,lastusername} = this.state
        

        if (!this.props.statusLogin)
        return <Redirect to="/login" />
        
        return ( 
            <>
            <div className="judul">
                 HALAMAN EDIT DATA
            </div>
            <Container>
            <form className="daftar">
                <Label nmlabel="fname">Username</Label>
                <Input type="text" id="nama" name="username" onChange={this.onChangeInput} value={username} />
                <Label nmlabel="lname">Name</Label>
                <Input type="text" id="name" name="name" onChange={this.onChangeInput} value={name}/>
                <Label nmlabel="lname">Roles</Label>
                <Input type="text" id="role" name="role"  onChange={this.onChangeInput} value={role} />
                <Input type="reset" value="Reset" name="ulang" />
                <Input type="button" value="Save" onClickInput={() => {if (window.confirm('Apakah Data Ingin Diubah?')) this.editProfil({username,name,role},lastusername)}}/>
            </form>
            </Container>
            </>
         );
    }
}

const mapStateToProps = (state) => {
    return {
        userList : state.data.tampung,
        statusLogin: state.auth.isLoggedIn,
        dataLogin : state.auth.dataLogin
    }
    
}
export default connect(mapStateToProps)(Edit);