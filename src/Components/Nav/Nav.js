import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {getUser} from '../../ducks/reducer'
import { connect } from 'react-redux'

class Nav extends Component{

    componentDidMount(){
        this.props.getUser()
    }

    render(){
        const { username, profilepicture} = this.props.user
        return(
            <div>
                <div>{profilepicture}</div>
                <div>{username}</div>
                <Link to="/dashboard">
                    <button>Home</button>
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
function mapStateToProps(state) {
    console.log(state)
    return {
        user: state.user
     }
}



export default connect(mapStateToProps, {getUser})(Nav)