import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { signUp } from '../../actions/auth'

import Navbar from '../home/Navbar'
import Footer from '../home/Footer'

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username : '',
            password : '',
            passwordDoNotMatch: false            
        }
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.id] : e.target.value
        });
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        if ( !this.state.passwordDoNotMatch ){
            this.props.signup(this.state);
        }
        else {
            console.log('PASSWORDS DO NOT MATCH');
        }
    }

    matchPassword = (e) => {
        const checkPass = e.target.value;
        if ( this.state.password.substr(0, checkPass.length) !== checkPass){
            this.setState({
                ...this.state,
                passwordDoNotMatch: true
            })
        }
        else {
            this.setState({
                ...this.state,
                passwordDoNotMatch: false
            })
        }

    }

    render() {

        return (
            <div className="page-container signup-container">
                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column text-center">
                    <Navbar />
                    <form className="form-signin" onSubmit={this.handleSubmit}>
                        <h1 className="h3 mb-3 font-weight-normal">Sign Up</h1>
                
                        { this.props.alert ? (
                            <div className="alert alert-warning" role="alert">
                                    { this.props.alert }. Go to <Link to='/login'>login page</Link>.
                            </div>
                        ) : (null) }
                
                        <label htmlFor="username" className="sr-only">Username</label>
                        <input type="text" id="username" className="form-control" placeholder="Username" onChange={this.handleChange} required autoFocus />
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password" id="password" className="form-control" placeholder="Password" onChange={this.handleChange} required />

                        <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
                        <input type="password" id="confirmPassword" className="form-control"  placeholder="Confirm Password" onChange={this.matchPassword} required />

                        { this.state.passwordDoNotMatch ? (
                            <div className="alert alert-danger" role="alert">
                                    Passwords Do Not match!
                            </div>
                        ) : (null) }

                        <button className="btn btn-lg btn-outline-light btn-block" type="submit">Sign Up</button>
                    </form>
                    <Footer/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        alert: state.auth.authError,
        is_authenticated: state.auth.is_authenticated
    };
}

const mapDispatchToProps = (dispatch) => {
    return{
        signup: (credentials) => signUp(dispatch, credentials)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
