require('dotenv').config();
const mongoose = require('mongoose');
const Users = require('../models/Users')
const { disconnect } = require('mongoose')

const DB_NAME = "COMPLIANCE"
const host = "@cluster0.01kzowe.mongodb.net"
const uri = `mongodb+srv://root:${process.env.PSW_NOSQL}${host}/${DB_NAME}?retryWrites=true&w=majority`
mongoose.connect(uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  })
  .then(async () => {
    console.log('Connexion to MongoDB with success !');
    await populate().then(() => {
      console.log('Disconnexion to MongoDB with success')
    }).catch((err) => {
      console.log({ err })
    })
  })
  .catch((err) => {
    console.log('Connexion to MongoDB failed !');
    console.log(err)
  })





async function populate() {
  let username = 'batman';
  // Users.findOne({ username: username }).then(async ()=>{await Users.deleteOne({ username: username })
  //   .then(() => { console.log('user deleted') })
  //   .catch((err) => { console.log({ err }) })})



  const user = new Users({
    username: "batman",
    hash: "$2a$10$6mZIHBL7OV7.SmtQfBUseeR86lPzE.ckXMyM431MhZMH33FGfIPj6", // correspond to batman
    email: "batman@wayne.com",
    firstname: "Bruce",
    lastname: "Wayne",
    doctor: "DrStrange",
    doctoremail: "hugo.strange@arkham.com",
  })
  await user.save()
    .then(() => { console.log("user added") })
    .catch((err) => { console.log({ err }) })



  await Users.deleteOne({ username: username })
    .then(() => { console.log('user deleted') })
    .catch((err) => { console.log({ err }) })


  // let users = ["batman", "robin", "alfred", "nightwing", "redhood", "batgirl", "catwoman", "ace", "poulet"];
  // for (let user in users) {
  //   await Users.deleteOne({ username: user })
  //     .then(() => { console.log(user[1],'deleted') })
  //     .catch((err) => { console.log({ err }) })
  // }

  await Users.insertMany([{
    username: "batman",
    hash: "$2a$10$6mZIHBL7OV7.SmtQfBUseeR86lPzE.ckXMyM431MhZMH33FGfIPj6", // correspond to batman
    email: "batman@wayne.com",
    firstname: "Bruce",
    lastname: "Wayne",
    doctor: "DrStrange",
    doctoremail: "hugo.strange@arkham.com",
  }, {
    username: "robin",
    hash: "$2a$10$6mZIHBL7OV7.SmtQfBUseeR86lPzE.ckXMyM431MhZMH33FGfIPj6", // correspond to batman
    email: "robin@wayne.com",
    firstname: "Damian",
    lastname: "Wayne",
    doctor: "DrStrange",
    doctoremail: "hugo.strange@arkham.com",
  }, {
    username: "alfred",
    hash: "$2a$10$6mZIHBL7OV7.SmtQfBUseeR86lPzE.ckXMyM431MhZMH33FGfIPj6", // correspond to batman
    email: "alfred@wayne.com",
    firstname: "Alfred",
    lastname: "Pennyworth",
    doctor: "DrStrange",
    doctoremail: "hugo.strange@arkham.com",
  }, {
    username: "nightwing",
    hash: "$2a$10$6mZIHBL7OV7.SmtQfBUseeR86lPzE.ckXMyM431MhZMH33FGfIPj6", // correspond to batman
    email: "nightwing@wayne.com",
    firstname: "Richard",
    lastname: "Grayson",
    doctor: "DrStrange",
    doctoremail: "hugo.strange@arkham.com",
  }, {
    username: "redhood",
    hash: "$2a$10$6mZIHBL7OV7.SmtQfBUseeR86lPzE.ckXMyM431MhZMH33FGfIPj6", // correspond to batman
    email: "redhood@wayne.com",
    firstname: "Jason",
    lastname: "Todd",
    doctor: "DrStrange",
    doctoremail: "hugo.strange@arkham.com",
  }, {
    username: "batgirl",
    hash: "$2a$10$6mZIHBL7OV7.SmtQfBUseeR86lPzE.ckXMyM431MhZMH33FGfIPj6", // correspond to batman
    email: "batgirl@wayne.com",
    firstname: "Barbara",
    lastname: "Gordon",
    doctor: "DrStrange",
    doctoremail: "hugo.strange@arkham.com",
  },
  {
    username: "catwoman",
    hash: "$2a$10$6mZIHBL7OV7.SmtQfBUseeR86lPzE.ckXMyM431MhZMH33FGfIPj6", // correspond to batman
    email: "catwoman@wayne.com",
    firstname: "Selina",
    lastname: "Kyle",
    doctor: "DrStrange",
    doctoremail: "hugo.strange@arkham.com",
  }, {
    username: "ace",
    hash: "$2a$10$6mZIHBL7OV7.SmtQfBUseeR86lPzE.ckXMyM431MhZMH33FGfIPj6", // correspond to batman
    email: "ace@wayne.com",
    firstname: "Ace",
    lastname: "Wayne",
    doctor: "DrStrangeVet",
    doctoremail: "hugo.strange@arkhamvet.com",
  }, {
    username: "poulet",
    hash: "$2a$10$6mZIHBL7OV7.SmtQfBUseeR86lPzE.ckXMyM431MhZMH33FGfIPj6", // correspond to batman
    email: "poulet@poulet.com",
    firstname: "poulet",
    lastname: "poulet",
    doctor: "DrBucket",
    doctoremail: "colonel@kfc.com",
  }]).then(() => { console.log("data inserted") }).catch((err) => { console.log({ err }) })

  await mongoose.connection.close()
}



