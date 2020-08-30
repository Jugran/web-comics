import React, { Component } from 'react'
import { connect } from 'react-redux'

import Navbar from '../home/Navbar'
import Footer from '../home/Footer'

import { signIn } from '../../actions/auth'


class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username : '',
            password : '',
            remember: false
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
        // console.log('signed in form: ', this.state);
        this.props.signIn(this.state)
    }

    render() {

        return (
            <div className="page-container signin-container">
                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column text-center">
                    <Navbar />
                    <form className="form-signin" onSubmit={this.handleSubmit}>
                        <h1 className="h3 mb-3 font-weight-normal">Login</h1>
                
                        { this.props.alert ? (
                            <div className="alert alert-warning" role="alert">
                                    { this.props.alert }
                            </div>
                        ) : (null) }
                
                        <label htmlFor="username" className="sr-only">Username</label>
                        <input type="text" id="username" className="form-control" placeholder="Username" onChange={this.handleChange} required autoFocus />
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password" id="password" className="form-control" placeholder="Password" onChange={this.handleChange} required />

                        <div className="custom-control custom-checkbox mb-3 text-left">
                            <input type="checkbox" className="custom-control-input" id="rememberMe" onChange={e => {
                                this.setState({...this.state, remember: e.currentTarget.checked})
                            }} />
                            <label className="custom-control-label" htmlFor="rememberMe" >Remember me</label>
                        </div>
                                
                        <button className="btn btn-lg btn-outline-light btn-block" type="submit">Login</button>
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
        signIn: (credentials) => signIn(dispatch, credentials)
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(SignIn);