const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db')
        const {username, password} = req.body

        const [user] = await db.check_user([username])

        if(user){ 
            return res.status(409).send('user exists')
        }
        
        const salt = bcrypt.getSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const [newUser] = await db.register_user([username, hash])

        req.session.user = newUser
        
        res.status(200).send(req.session.user)
    },  
    login: (req, res) => {
        const db = req.app.get('db')
    },
    logout: (req, res)=> {
        const db = req.app.get('db')
    },  
    getUser: (req, res)=> {
        const db = req.app.get('db')
    },  
    getPostsUser: (req, res)=> {
        const db = req.app.get('db')
    },  
    getPostId: (req, res)=> {
        const db = req.app.get('db')
    },  
    postNew: (req, res)=> {
        const db = req.app.get('db')
    },  

}