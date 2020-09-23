const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db');
        const {username, password} = req.body;

        const [user] = await db.check_user([username]);

        if(user) return res.status(409).send('user exists');
        
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const profile_pic = `https://robohash.org/${username}?set=set4`;

        const [newUser] = await db.register_user([username, hash, profile_pic]);

        req.session.user = newUser;
        
        res.status(200).send(req.session.user);
    },  
    login: async (req, res) => {
        const db = req.app.get('db');
        const {username, password} = req.body;

        const [existingUser] = await db.check_user([username]);

        if(!existingUser) {return res.status(409).send('user does not exist')};

        const isAuthenticated = bcrypt.compareSync(password, existingUser.password);

        if(!isAuthenticated){
            return res.status(403).send('Incorrect username or password')
        }

        delete existingUser.password

        req.session.user = existingUser

        res.status(200).send(req.session.user)
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
    
    logout: (req, res)=> {
        req.session.destroy();
        res.sendStatus(200)
    },  
    // getUser: (req, res)=> {
    //     if(req.session.user) {
    //         res.status(200).send(req.session.user)
    //     } else {
    //         res.status(404).send('No session found')
    //     }
    // }
}