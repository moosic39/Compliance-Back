const express = require('express')
const Auth = require('../authentication')
const Users = require('../models/Users')
const { hashPassword } = require('../authentication')
const router = express.Router()
const { verifyToken } = require('../verifyToken');


/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource')
})


// read User infos
router.get('/settings/:id', verifyToken, (req, res, next) => {
  let username = req.params.id
  console.log(username);
  const query = Users.where({ username })
  query.find((err, obj) => {
    if (err) { console.error({ err }) }
    if (!obj) { res.status(204).json('no content') }
    else {
      console.log("1",obj[0].hash)
      // before finding a better way to delete hash before sending
      obj[0].hash =''
      console.log("2",obj[0])
      res.status(200).json(obj)
    }
  })
})


// update User infos
router.put('/settings/:id', verifyToken, (req, res, next) => {
  let infos = { ...req.body };
  hashPassword(req.body.password, (err, hash) => {
    if (err) console.error({ err });
    delete infos.password;
    const user = new Users({ ...infos, hash: hash });
    console.log(infos);
    user.updateOne({ username: req.params.id }, { ...infos })
      .then(() => res.status(201).json('user modified successfully'))
      .catch(err => res.status(400).json({ err }))
  })
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
    if (!obj) { console.log("no user") }
    else {
      let storedHash = obj.hash
      console.log('stored', storedHash)

      Auth.isPasswordsEqual(password, storedHash, (err, isMatch) => {
        if (err) console.log({ err });
        console.log('isMatch', isMatch)
        if (!isMatch) {
          console.log('wrong password')
          res.status(401).json('wrong password')
        }
        else {
          Auth.authenticationSuccessful(username, (err, token) => {
            if (err) console.log({ err });
            console.log('token', token)
            Users.updateOne({ username: username }, { token: token })
              .then(() => { console.log("token added") })
              .catch((err) => { console.log({ err }) })
            res.json({ 'username': username, 'token': token })
          }
          )
        }
      })
    }
  })
})

module.exports = router
