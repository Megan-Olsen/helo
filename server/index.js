require('dotenv').config();
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const ctrl = require('./controller')
const verifyUser = require('./middlewares/verifyUser')


const app = express()

const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env

app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 1000* 60 * 60 * 24 * 365}
}))

//Endpoints go here
app.post('/api/auth/register', ctrl.register)
app.post('/api/auth/login', ctrl.login)
app.delete('/api/auth/logout', ctrl.logout)
app.get('/api/auth/user', ctrl.getUser)

// app.get('/api/posts/:userid', verifyUser, ctrl.getPostsUser)
// app.get('/api/post/:postid', verifyUser, ctrl.getPostId)
// app.post('/app/post/:userid', verifyUser, ctrl.postNew)



massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(dbInstance => {
    app.set('db', dbInstance)
    console.log('DB is working hard')
    app.listen(SERVER_PORT, () => console.log(`Working hard and hardly working on Port ${SERVER_PORT}`)
    )
}).catch(err => console.log(err))