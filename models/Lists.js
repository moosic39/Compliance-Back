const mongoose = require('mongoose')

const listsSchema = mongoose.Schema({
  timestamp: { type: Number, timestamp: true, required: true, unique: true },
  username: { type: String, required: true },
  medications: {
    medication1: { type: String, },
    medication2: { type: String, },
    medication3: { type: String, },
    medication4: { type: String, },
    medication5: { type: String, },
    medication6: { type: String, },
    medication7: { type: String, },
    medication8: { type: String, },
    medication9: { type: String, },
    medication10: { type: String, },
    medication11: { type: String, },
    medication12: { type: String, },
    medication13: { type: String, },
    medication14: { type: String, }
  },

});

module.exports = mongoose.model('lists', listsSchema)
