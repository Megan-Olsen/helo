// import axios from 'axios'

const initialState = {
    username: null,
    id: null,
    profilepicture: null
}

const LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER = 'LOGOUT_USER'
// const GET_USER = 'GET_USER'

export function loginUser(username, id, profilepicture) {
  return {
    type: LOGIN_USER,
    payload: {
      username: username,
      id: id, 
      profilepicture: profilepicture
    },
  }
}

export function logoutUser() {
  return {
    type: LOGOUT_USER,
    payload: null,
  }
}

// export function getUser(username, id, profilepicture) {
//   let payload = axios.get('/api/auth/user').then(res => res.data)
//   return {
//     type: GET_USER,
//     payload: payload,
//   }
// }

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, username: action.payload.username, id: action.payload.id, profilepicture: action.payload.profilepicture}
    case LOGOUT_USER:
      return initialState
    // case GET_USER + '_PENDING':
    //   return { ...state }
    // case GET_USER + '_FULFILLED':
    //   return { ...state, user: action.payload.data, isLoggedIn: true }
    // case GET_USER + '_REJECTED':
    //   return initialState
    default:
      return state
  }
}