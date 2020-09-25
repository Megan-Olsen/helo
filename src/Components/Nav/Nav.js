import React, { Component } from 'react'
import {Link} from 'react-router-dom'
// import {getUser} from '../../ducks/reducer'
import { connect } from 'react-redux'

class Nav extends Component{


    render(){
        console.log(this.props)
        const { username, profile_pic } = this.props.username
        return(
            <div className="topnav">
                <img className="image" src={profile_pic} alt= 'my cat'/>
                <div className="username">{username}</div>
                <Link to="/dashboard">
                    <img className="navbutton" src ="https://raw.githubusercontent.com/DevMountain/simulation-3/master/assets/home_logo.png" alt="Home"/>
                </Link>
                <Link to="/new">
                    <img className="navbutton" src = "https://raw.githubusercontent.com/DevMountain/simulation-3/master/assets/new_logo.png" alt="New Post"/>
                </Link>
                <div className="botnav">
                <Link to="/">
                    <img className="logout" src ="https://raw.githubusercontent.com/DevMountain/simulation-3/master/assets/shut_down.png" alt="Logout"/>
                </Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(Nav)