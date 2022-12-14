require('dotenv').config();
const mongoose = require('mongoose');
const Lists = require('../models/Lists')
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

  // Users.findOne({ username: username }).then(async ()=>{await Users.deleteOne({ username: username })
  //   .then(() => { console.log('user deleted') })
  //   .catch((err) => { console.log({ err }) })})



  // const user = new Users({
  //   username: "batman",
  //   hash: "$2a$10$6mZIHBL7OV7.SmtQfBUseeR86lPzE.ckXMyM431MhZMH33FGfIPj6", // correspond to batman
  //   email: "batman@wayne.com",
  //   firstname: "Bruce",
  //   lastname: "Wayne",
  //   doctor: "DrStrange",
  //   doctoremail: "hugo.strange@arkham.com",
  // })
  // await user.save()
  //   .then(() => { console.log("user added") })
  //   .catch((err) => { console.log({ err }) })



  // await List.deleteOne({ username: username })
  //   .then(() => { console.log('user deleted') })
  //   .catch((err) => { console.log({ err }) })


  // let users = ["batman", "robin", "alfred", "nightwing", "redhood", "batgirl", "catwoman", "ace", "poulet"];
  // for (let user in users) {
  //   await Users.deleteOne({ username: user })
  //     .then(() => { console.log(user[1],'deleted') })
  //     .catch((err) => { console.log({ err }) })
  // }

  await Lists.insertMany([{
    timestamp: 1671014939557,
    username: 'batman',
    medications: {
      medication1: 'hydromorphone',
      medication2: 'doliprane',
      medication3: 'prozac',
    },

  }, {
    timestamp: 1671011452666,
    username: 'batman',
    medications: {
      medication1: 'hydromorphone',
      medication2: 'doliprane',
    },

  }, {
    timestamp: 1670925052666,
    username: 'batman',
    medications: {
      medication1: 'hydromorphone',
      medication2: 'doliprane',
    },

  }, {
    timestamp: 1670838652666,
    username: 'batman',
    medications: {
      medication1: 'hydromorphone',
      medication2: 'doliprane',
    },

  }, {
    timestamp: 1670752252666,
    username: 'batman',
    medications: {
      medication1: 'hydromorphone',
      medication2: 'doliprane',
    },

  }, {
    timestamp: 1670665852666,
    username: 'batman',
    medications: {
      medication1: 'hydromorphone',
      medication2: 'doliprane',
      medication3: 'prozac',
    },

  }, {
    timestamp: 1670579452666,
    username: 'batman',
    medications: {
      medication1: 'hydromorphone',
      medication2: 'doliprane',
      medication3: 'prozac',
    },

  }, {
    timestamp: 1670493052666,
    username: 'batman',
    medications: {
      medication1: 'hydromorphone',
      medication2: 'doliprane',
      medication3: 'prozac',
    },

  }, {

    timestamp: 1670320252666,
    username: 'batman',
    medications: {
      medication1: 'hydromorphone',
      medication2: 'doliprane',
      medication3: 'prozac',
    },

  }, {
    timestamp: 1670233852666,
    username: 'batman',
    medications: {
      medication1: 'hydromorphone',
      medication2: 'doliprane',
      medication3: 'prozac',
    },

  }, {
    timestamp: 1670147452666,
    username: 'batman',
    medications: {
      medication1: 'hydromorphone',
      medication2: 'doliprane',
    },

  }, {
    timestamp: 1670061052666,
    username: 'batman',
    medications: {
      medication1: 'hydromorphone',
      medication2: 'doliprane',
      medication3: 'prozac',
    },

  }, {
    timestamp: 1669974652666,
    username: 'batman',
    medications: {
      medication1: 'hydromorphone',
      medication2: 'doliprane',
      medication3: 'prozac',
    },

  }, {
    timestamp: 1669888252666,
    username: 'batman',
    medications: {
      medication1: 'hydromorphone',
      medication2: 'doliprane',
      medication3: 'prozac',
    },

  }, {//-----------
    timestamp: 1671014939556,
    username: 'robin',
    medications: {
      medication1: 'lorazepan',
      medication2: 'doliprane',
      medication3: 'alprazolam',
    },

  }, {
    timestamp: 1671011452667,
    username: 'robin',
    medications: {
      medication1: 'lorazepan',
      medication2: 'doliprane',
    },

  }, {
    timestamp: 1670925052667,
    username: 'robin',
    medications: {
      medication1: 'lorazepan',
      medication2: 'doliprane',
    },

  }, {
    timestamp: 1670838652667,
    username: 'robin',
    medications: {
      medication1: 'lorazepan',
      medication2: 'doliprane',
    },

  }, {
    timestamp: 1670752252667,
    username: 'robin',
    medications: {
      medication1: 'lorazepan',
      medication2: 'doliprane',
    },

  }, {
    timestamp: 1670665852667,
    username: 'robin',
    medications: {
      medication1: 'lorazepan',
      medication2: 'doliprane',
      medication3: 'alprazolam',
    },

  }, {
    timestamp: 1670579452667,
    username: 'robin',
    medications: {
      medication1: 'lorazepan',
      medication2: 'doliprane',
      medication3: 'alprazolam',
    },

  }, {
    timestamp: 1670493052667,
    username: 'robin',
    medications: {
      medication1: 'lorazepan',
      medication2: 'doliprane',
      medication3: 'alprazolam',
    },

  }, {

    timestamp: 1670320252667,
    username: 'robin',
    medications: {
      medication1: 'lorazepan',
      medication2: 'doliprane',
      medication3: 'alprazolam',
    },

  }, {
    timestamp: 1670233852667,
    username: 'robin',
    medications: {
      medication1: 'lorazepan',
      medication2: 'doliprane',
      medication3: 'alprazolam',
    },

  }, {
    timestamp: 1670147452667,
    username: 'robin',
    medications: {
      medication1: 'lorazepan',
      medication2: 'doliprane',
    },

  }, {
    timestamp: 1670061052667,
    username: 'robin',
    medications: {
      medication1: 'lorazepan',
      medication2: 'doliprane',
      medication3: 'alprazolam',
    },

  }, {
    timestamp: 1669974652667,
    username: 'robin',
    medications: {
      medication1: 'lorazepan',
      medication2: 'doliprane',
      medication3: 'alprazolam',
    },

  }, {
    timestamp: 1669888252667,
    username: 'robin',
    medications: {
      medication1: 'lorazepan',
      medication2: 'doliprane',
      medication3: 'alprazolam',
    },
  },{
    timestamp: 1671014939555,
    username: 'mickael',
    medications: {
      medication1: 'placebo',
      medication2: 'doliprane',

    },

  }, {
    timestamp: 1671011452660,
    username: 'mickael',
    medications: {
      medication1: 'placebo',
      medication2: 'doliprane',
    },

  }, {
    timestamp: 1670925052660,
    username: 'mickael',
    medications: {
      medication1: 'placebo',
      medication2: 'doliprane',
    },

  }, {
    timestamp: 1670838652660,
    username: 'mickael',
    medications: {
      medication1: 'placebo',
      medication2: 'doliprane',
    },

  }, {
    timestamp: 1670752252660,
    username: 'mickael',
    medications: {
      medication1: 'placebo',
      medication2: 'doliprane',
    },

  }, {
    timestamp: 1670665852660,
    username: 'mickael',
    medications: {
      medication1: 'placebo',
      medication2: 'doliprane',

    },

  }, {
    timestamp: 1670579452660,
    username: 'mickael',
    medications: {
      medication1: 'placebo',
      medication2: 'doliprane',

    },

  }, {
    timestamp: 1670493052660,
    username: 'mickael',
    medications: {
      medication1: 'placebo',
      medication2: 'doliprane',

    },

  }, {

    timestamp: 1670320252660,
    username: 'mickael',
    medications: {
      medication1: 'placebo',
      medication2: 'doliprane',

    },

  }, {
    timestamp: 1670233852660,
    username: 'mickael',
    medications: {
      medication1: 'placebo',
      medication2: 'doliprane',

    },

  }, {
    timestamp: 1670147452660,
    username: 'mickael',
    medications: {
      medication1: 'placebo',
      medication2: 'doliprane',
    },

  }, {
    timestamp: 1670061052660,
    username: 'mickael',
    medications: {
      medication1: 'placebo',
      medication2: 'doliprane',

    },

  }, {
    timestamp: 1669974652660,
    username: 'mickael',
    medications: {
      medication1: 'placebo',
      medication2: 'doliprane',

    },

  }, {
    timestamp: 1669888252660,
    username: 'mickael',
    medications: {
      medication1: 'placebo',
      medication2: 'doliprane',

    },

  },]).then(() => { console.log("data inserted") }).catch((err) => { console.log({ err }) })

  await mongoose.connection.close()
}



