const jwt = require('jsonwebtoken')
require('dotenv').config()
const Users = require('./models/Users')

function verifyToken(req, res, next) {
    if (req.headers && req.headers.token) {
        var authorization = req.headers.token,
            decoded;
        try {
            decoded = jwt.verify(authorization, process.env.SECRET_TOKEN_KEY);
        } catch (e) {
            return res.status(401).send('unauthorized', e);
        }

        // verify if the url request correspond to the token's owner
        var username = decoded.username
        console.log(username)
        console.log("don't play with me", req.params.id)
        if (req.params.id !== username) { return res.status(403).json('YOU ARE NOT ALLOWED') }

        const query = Users.where({ username })
        query.findOne((err, obj) => {

            if (err) console.log({ err })

            if (!obj) { console.log('you\'re not allowed') } else {
                console.log(obj.username, 'is allowed to access')

            }

        })
        next()
    }
}
module.exports = { verifyToken: verifyToken };
