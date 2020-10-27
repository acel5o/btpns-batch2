import React, { Component } from 'react';
import "./style.css";
import Gambar from "./react.png"
import {Card,CardIsi,Tabel} from "../../../components"
import {Redirect,Link} from "react-router-dom"

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }

    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(json => this.setState({users : json}))    
    // }
  
    render() { 
        if (!this.props.statusLogin)
            return <Redirect to="/login" />
        
        return ( 
            // <>
            //     <div className="container-card">
            //         <Card><CardIsi> 
            //         {
            //             this.state.users.map((user,idx) => {
            //                 return <div key={idx}>Name : {user.name}</div>
            //             })
            //         }
            //     </CardIsi></Card>
            //     </div>
            // </>
            <div className="container-card">
                    <Card>  
                        <CardIsi gambar={Gambar} title="ReactJS">
                            React Js adalah sebuah library JavaScript yang di buat oleh facebook. 
                            React bukanlah sebuah framework MVC. React adalah library yang bersifat composable user interface, 
                            yang artinya kita dapat membuat berbagai UI yang bisa kita bagi menjadi beberapa komponen. 
                            
                            {this.props.statusLogin?
                                <Link to="/login">
                                    <button>Pindah Ke Login</button> 
                                </Link>
                            :
                                <Link to="/login">
                                    <button>Pindah Ke Login</button> 
                                </Link>
                            }   

    
                        </CardIsi>
                    </Card>
                </div>
         );
    }
}
 
export default Home;