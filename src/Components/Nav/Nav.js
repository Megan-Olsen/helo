import React, { Component } from 'react'
import {Link} from 'react-router-dom'
// import {getUser} from '../../ducks/reducer'
import { connect } from 'react-redux'

class Nav extends Component{


    render(){
        console.log(this.props)
        const { username, profile_pic } = this.props.username
        return(
            <div classname="nav">
                <img className="image" src={profile_pic} alt= 'my cat'/>
                <div>{username}</div>
                <Link to="/dashboard">
                    <img className="navbutton" src ="https://raw.githubusercontent.com/DevMountain/simulation-3/master/assets/home_logo.png" alt="Home"/>
                </Link>
                <Link to="/new">
                    <button>New Post</button>
                </Link>
                <Link to="/">
                    <button>Logout</button>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(Nav)