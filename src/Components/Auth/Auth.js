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
            <div>
                <div className="logininput">
              <p>
                  Username:
              </p>
               <input
                maxLength="100"
                name="username"
                onChange={(e) => {
                  this.handleChange(e)
                }}
              />
              <p>
                  Password:
              </p>
               <input
                type="password"
                maxLength="20"
                name="password"
                onChange={(e) => {
                  this.handleChange(e)
                }}
              />
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
        )
    }
}

export default connect(null, {loginUser})(Auth)