import React, { Component } from 'react'
import {Link} from 'react-router-dom'
// import {getUser} from '../../ducks/reducer'
import { connect } from 'react-redux'

class Nav extends Component{

    // componentDidMount(){
    //     this.props.getUser()
    // }

    render(){
        console.log(this.props)
        const { username, profilepicture } = this.props.username
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
    return state
}

export default connect(mapStateToProps)(Nav)