const mongoose = require ('mongoose')

const usersSchema = mongoose.Schema({
  username: {type: String, required: true, unique: true},
  firstname:{type: String,},
  lastname:{type: String,},
  email:{type: String, required: true,},
  hash:{type: String, required: true,},
  token:{type: String,},
  doctor:{type: String,},
  doctoremail:{type: String,},
});

module.exports = mongoose.model('users',usersSchema)

