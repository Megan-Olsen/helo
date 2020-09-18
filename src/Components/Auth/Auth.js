import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { loginUser } from '../../ducks/reducer'
import { connect } from 'react-redux'
import axios from 'axios'

class Auth extends Component{
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }
    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      })
    }
    handleLogin = (e) => {
      const { username, password } = this.state
      axios
      .post('/api/auth/login', { username, password })
      .then((res) => {
        this.props.loginUser(res.data)
        this.props.history.push('/dashboard')
      })
      .catch((err) => {
        alert(err.message)
      })
    }
    handleRegister = () => {
      const { username, password } = this.state
      axios
        .post('/api/auth/register', {username, password})
        .then((res) => {
          this.props.loginUser(res.data)
          this.props.history.push('/dashboard')
        })
        .catch((err) => {
          alert(err.message)
        })
    }


    render(){
        return(
            <div className="auth">
              <div className="authcontainer">
                <div className="logininput">
                  <img className="logo" src="https://raw.githubusercontent.com/DevMountain/simulation-3/master/assets/helo_logo.png" alt="logo"/>
                  <h1 className="helo">Helo</h1>
              <p className="loggywords">
                  Username:
               <input
                maxLength="100"
                name="username"
                onChange={(e) => {
                  this.handleChange(e)
                }}
                />
                </p>
              <p className="loggywords">
                  Password:
               <input
                type="password"
                maxLength="20"
                name="password"
                onChange={(e) => {
                  this.handleChange(e)
                }}
                />
                </p>
            </div>
            <button
              onClick={() => {
                this.handleLogin()
              }}
              className="input-button"
            >
              Log in
            </button>
            <button
              onClick={() => {
                this.handleRegister()
              }}
              className="input-button"
            >
              Register
            </button>
            </div>
            </div>
        )
    }
}

export default connect(null, {loginUser})(Auth)