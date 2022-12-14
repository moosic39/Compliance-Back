const mongoose = require('mongoose');
const DB_NAME = "COMPLIANCE"
const host = "@cluster0.01kzowe.mongodb.net"
const uri = `mongodb+srv://root:${process.env.PSW_NOSQL}${host}/${DB_NAME}?retryWrites=true&w=majority`
mongoose.connect(uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  })
  .then(() => console.log('Connexion to MongoDB with success !'))
  .catch((err) => {
    console.log('Connexion to MongoDB failed !');
    console.log(err)
  });
