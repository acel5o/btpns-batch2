import React, { Component } from 'react';
import "./style.css"
import {Menu} from "../../components"
import {Link} from "react-router-dom"
import { connect } from "react-redux"

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            
        }
    }


    render() { 
        return ( 
            <div className="nav-container">
                <div className="nav-judul">
                    BELAJAR REACT
                </div>
              
                {this.props.statusLogin?
                <>
                    <Link to="/home">
                        <Menu text="Home" />
                    </Link>
                    <Link to="/user"><Menu text="RegisUser" /></Link>
                    <Link to="/datauser"><Menu text="Data User" /></Link>
                    <Link to="/login">
                        <Menu text="Logout" goToPage={this.props.doLogout}/>
                    </Link>
                </>
                    :
                <>
                    <Link to="/login">
                        <Menu text="Home" />
                    </Link>
                    <Link to="/"><Menu text="Regis" /></Link>
                    <Link to="/login"><Menu text="Login"/></Link>
                </>
                }

                {/* <Menu text="Home"  goToPage={() => this.props.changePage("Home")} />

                {this.props.statusLogin?
                <Menu text="Logout" goToPage={this.props.changeLogin} />
                    :
                    <>
                <Menu text="Regis" goToPage={() => this.props.changePage("Regis")} />
                <Menu text="Login" goToPage={() => this.props.changePage("Login")} /></>
                } */}
            </div>
                
         );

    }
}


const mapStateToProps = (state) => ({
    statusLogin: state.auth.isLoggedIn
})

const mapDispatchToProps = (dispatch) => ({
    doLogout: () => dispatch({ type: "LOGOUT" })
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav)