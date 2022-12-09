const mongoose = require ('mongoose')

const listsSchema = mongoose.Schema({
  username: {type: String, required: true, unique: true},
  medication1:{type: String,},
  medication2:{type: String,},
  medication3:{type: String,},
  medication4:{type: String,},
  medication5:{type: String,},
  medication6:{type: String,},
  medication7:{type: String,},
  medication8:{type: String,},
});

module.exports = mongoose.model('lists',listsSchema)
