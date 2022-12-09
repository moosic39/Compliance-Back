let isUserAuthenticated = false

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { storeToken } = require('./connectionToDb')
const { token } = require('morgan')

require('dotenv').config()


let restrictedUrls = [
  '/list/'
]

function authenticationSuccessful (username,callback) {
  isUserAuthenticated = true
  return generateAccessToken(username, callback)
}

function hashPassword (myPlaintextPassword, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(myPlaintextPassword, salt, callback)
  })
}

function isPasswordsEqual (passwordToCompare, hashPassword, callback) {
  bcrypt.compare(passwordToCompare, hashPassword, callback)
}

function generateAccessToken(username,callback) {
  let payload = {username:username}
  console.log('username',payload)
  return jwt.sign(payload, process.env.SECRET_TOKEN_KEY,{expiresIn:'1d'},  callback)
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token === null) return res.sendStatus(401)

  jwt.verify(token, process.env.SECRET_TOKEN_KEY,(err, username) => {
    console.log(err)

    if (err) return res.sendStatus(403)

    req.user = username

    next()
  })
}

function firewall (req, res, next) {

  let url = req.url

  //check if the requested url is restricted or not
  if (restrictedUrls.includes(url)) {

    //if user is not authenticated
    if (isUserAuthenticated === false) {
      res.status(403).send("User is not authenticated")
      return
    }
    next() // proceed as usual because user is authenticated
    return
  }

  next() //proceed as usual for public urls

}

module.exports = {
  authenticationSuccessful: authenticationSuccessful,
  firewall: firewall,
  hashPassword: hashPassword,
  isPasswordsEqual: isPasswordsEqual,
}
