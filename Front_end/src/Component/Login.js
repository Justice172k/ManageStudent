import React, { Component } from 'react'
import axios from 'axios'
import './Login.css'
import { Navigate } from 'react-router-dom'


export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            isLogin: "false",
            errorCode: "",
        }
        // this.state = this.state.bind(this)
    }

    handleOnChangeUserName = (event) => {
        this.setState({
            username: event.target.value
        })
        console.log(this.state.username)
    }

    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
        console.log(this.state.password)
    }


    handleButtonLogin = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/login', {
            username: this.state.username,
            password: this.state.password
        })
            .then(response => {
                if (response.status === 200) {
                    this.setState({ isLogin: "true" })
                    console.log(response)
                }
            }
            )
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <div className="background-login">
                    <div className="shape"></div>
                    <div className="shape"></div>
                </div>
                <form className='form-login'>
                    <h3>Login Here</h3>

                    <label className='label-login' for="username">Username</label>
                    <input className='input-login' type="text" placeholder="Username" id="username" onChange={(event) => { this.handleOnChangeUserName(event) }} />

                    <label className='label-login' for="password">Password</label>
                    <input className='input-login' type="password" placeholder="Password" id="password" onChange={(event) => { this.handleOnChangePassword(event) }} />

                    <button className='btn-login' onClick={(event) => { this.handleButtonLogin(event) }}>Log In</button>
                    {this.state.isLogin === "true" && <Navigate to="/home" />}
                </form>
            </div>
        )
    }
}
