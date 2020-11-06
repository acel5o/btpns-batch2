import React, { Component } from 'react';
import {Tabel} from "../../../components"
import {connect} from "react-redux"
import {Link, Redirect} from "react-router-dom"

class DataUser extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            tampung:[]
         }
    }

    componentDidMount=async()=>{
    console.log(this.props.dataLogin.token);
       await fetch('http://localhost:3001/users/data',{
            method : 'GET',
            headers :{
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer '+this.props.dataLogin.token
            },
        })
        .then(response => response.json())
           .then(result => {
               
               this.setState({tampung : result})
               this.props.doFetch(this.state.tampung)
               console.log(this.state.tampung);
                
        })
    
    }

    Delete =  async(username) => {
       await fetch('http://localhost:3001/users/delete/'+username,{
            method : 'POST',
            headers :{
                Accept: 'application/json',
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer '+this.props.dataLogin.token
            },
        })
        .then(response => response.json())
        .then(result =>{ console.log(result)})
        .catch(error => console.log('error', error));
        window.location.reload()
    }

    

    render() {
        if (!this.props.statusLogin)
        return <Redirect to="/login" />
        
        return ( 
            <><p />
            <Tabel>
                {this.props.statusLogin?
                <tbody>
                       {this.state.tampung.map((user,idx) => {
                               return <tr key={idx}>
                                      <td>{user.username}</td>
                                      <td>{user.name}</td>
                                      <td>{user.role}</td>
                                      <td>{this.props.dataLogin.dataUser.role==="admin"?
                                          <>
                                          <Link to={"Edit/"+idx}>
                                            <button>Edit</button>
                                          </Link>
                                          <button onClick={() => { if (window.confirm('Apakah Data Ingin Dihapus?')) this.Delete(user.username) }}>Delete</button>
                                          </>
                                      :
                                      <>{this.props.dataLogin.dataUser.username===user.username&&
                                        <Link to={"Edit/"+idx}>
                                            <button>Edit</button>
                                        </Link>
                                        }    
                                      </>
                                        }
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

const mapStateToProps = (state) => {
    return {
        statusLogin: state.auth.isLoggedIn,
        dataLogin : state.auth.dataLogin,
    }   
}

const mapDispatchToProps = (dispatch) => ({
    doFetch: (datauser) => dispatch({ type: "FETCH", payload: {datauser}}),
})

export default connect(mapStateToProps,mapDispatchToProps)(DataUser)