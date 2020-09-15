const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res)=> {
        const db = req.app.get('db')
        const {username, password} = req.body

        const [user] = await db.check_user([username])
        if (user) { 
            return res.status(409).send('User Already Exists, Please Log In')
        }
        const salt = bcrypt.getSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const [newUser] = await db.register_user([username, hash])

        req.session.user = newUser
        
        res.status(200).send(req.session.user)
    },  
    login: (req, res) => {

    },
    logout: (req, res)=> {

    },  
    getUser: (req, res)=> {

    },  
    getPostsUser: (req, res)=> {

    },  
    getPostId: (req, res)=> {

    },  
    postNew: (req, res)=> {

    },  

}