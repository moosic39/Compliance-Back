const jwt = require('jsonwebtoken');
require('dotenv').config();
const Users = require('./models/Users');


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
        var username = decoded.username;
        console.log(username)
        console.log("heyhey",req.params.id)
        if (req.params.id !== username){return res.status(403).json("YOU ARE NOT ALLOWED")}

        const query = Users.where({ username })
        query.findOne((err, obj) => {
            console.log(err, obj)
            if (err) console.log({ err });

            if (!obj) { console.log("you're not allowed")}

            else {
                console.log(obj.username, 'is allowed to access');

            }

        })
        next()
    }
}
//         query.findOne({ username }).then(function (user) {
//             if username !== user.username) return
//             else{

//             console.log(user, 'is allowed to access');
//             return res.send(200);}
//         });
//     }
//     return res.send(500);
// }

module.exports = { verifyToken: verifyToken }
