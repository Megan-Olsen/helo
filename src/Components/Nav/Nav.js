import React, { Component } from 'react'
import {Link} from 'react-router-dom'
// import {getUser} from '../../ducks/reducer'
import { connect } from 'react-redux'

class Nav extends Component{
    constructor(props){
        super(props)
        const {username, profilePicture} = props;
        this.state = {
            username,
            profilePicture
        }
    }

    render(){
        return(
            <div>
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
// function mapStateToProps(state) {
//     console.log(state)
//     return {
//         username: state.username,
//         profilePicture: state.profilepicture 
//      }
// }

// console.log(props)
// connect(mapStateToProps)
export default (Nav)