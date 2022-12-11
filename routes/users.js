const express = require('express')
const DB = require('../connectionToDb')
const Auth = require('../authentication')
const Users = require('../models/Users')

const { hashPassword } = require('../authentication')

const router = express.Router()

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource')
})

// signup
router.post('/signup', (req, res, next) => {
  hashPassword(req.body.password, (err, hash) => {
    if (err) console.error({ err })
    const user = new Users({
      username: req.body.username,
      email: req.body.email,
      hash: hash,
    })
    user.save()
      .then(() => res.status(201).json('user created'))
      .catch(err => res.status(400).json({ err }))
  })
})

// signin
router.post('/signin', (req, res, next) => {
  let username = req.body.username
  let password = req.body.password
  console.log(username, password)
  const query = Users.where({ username })
  query.findOne((err, obj) => {
    if (err) console.log({ err })
    if (!obj){console.log("no user")}
    else {
      let storedHash = obj.hash
      console.log('stored',storedHash)

      Auth.isPasswordsEqual(password,storedHash, (err, isMatch) => {
        if (err) console.log({ err });
        console.log('isMatch', isMatch)
        if (!isMatch) {
          console.log('wrong password')
          res.status(401).json('wrong password')
        }
        else {
          Auth.authenticationSuccessful(username,(err,token)=>{
            if (err) console.log({err});
            console.log('token',token)
            Users.updateOne({username:username},{token:token})
              .then(()=>{console.log("token added")})
                .catch((err)=>{console.log({err})})
            res.json({ 'username': username, 'token': token })}
        )}
      })
    }
  })
})

//   DB.askHashPasswordDB(username, async (err, result) => {
//     // if (err) {
//     //   console.error(err)
//     //   res.json('no corresponding username')
//     //   console.log(result)
//     // }
//     // let storedHash = await result[0].hash
//     //
//     //   await Auth.isPasswordsEqual(password, storedHash, (err, isMatch) => {
//     //     if (err) console.error(err)
//     //     console.log('isMatch', isMatch)
//     //
//     //     if (isMatch) {
//     //       let token = Auth.authenticationSuccessful(username)
//     //       res.json({ 'username': username, 'token': token })
//     //     }
//     //     if (!isMatch) {
//     //       console.log('wrong password')
//     //       res.json('wrong password')
//     //     }
//     //   })
//
//   })
// })

  /*
  app.post('/signIn', (request, response) => {
    let json = request.body
    let login = json.username
    let psw = json.password
    createNewUser(login, (err, username) => {
      hashPassword(psw, (err, hash) => {
        if (err) console.error(err)
        storeHashedPassword(hash, login, (err, data) => {
          if (err) console.error(err)
          console.log('message', data)
        })
        response.json({ message: 'you\'re successfully signin' })
      })
    })
  })

  app.post('/auth', (request, response) => {
      let json = request.body
      let login = json.username
      let psw = json.password

      console.log('login', login, '\n', 'psw', psw)

      askHashPasswordDB(login, async (err, result) => {
        if (err) {
          console.error(err)
          response.json('no corresponding username')
        }
        let storedHash = await result[0].hash
        await hashPassword(psw, async (err, hash) => {
          if (err) console.error(err)
          await isPasswordsEqual(psw, storedHash, (err, isMatch) => {
            if (err) console.error(err)
            console.log('isMatch', isMatch)

            if (isMatch) {
              let token = authenticationSuccessful(login)
              response.json({ 'username': login, 'token': token })
            }
            if (!isMatch) {
              console.log('stored', storedHash)
              console.log('hash', hash)
              console.log('wrong password')
              response.json('wrong password')
            }
          })
        })
      })
    })
  */
  module.exports = router
