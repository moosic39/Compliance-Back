const mysql = require('mysql2')
require('dotenv').config()



const infoDB = {
  host: 'localhost',
  user: process.env.USERDBMYSQL,
  password: process.env.PSWDBMYSQL,
  database: 'ouroboros'
}

function createConnection () {
  let connection = mysql.createConnection(infoDB)
  console.log('connected')
  return connection
}
//
// function infoAllSite (callback) {
//   createConnection().query(
//     'SELECT * FROM Site_Address',
//     callback
//   )
//   connectionEnded()
// }
//
// function infoSite (idSite, callback) {
//   console.log(idSite)
//   createConnection().query(
//     'SELECT * FROM Site_Address WHERE idSite = ?',
//     [idSite],
//     callback
//   )
//   connectionEnded()
// }
//
// function infoProductLine (idSite, callback) {
//   createConnection().query(
//     'SELECT * FROM Production_Lines WHERE idSite = ?',
//     [idSite],
//     callback
//   )
//   connectionEnded()
// }
//
// function infoProductForSite (idSite, callback) {
//   createConnection().query(
//     'SELECT product FROM Production_Lines WHERE idSite = ? GROUP BY product',
//     [idSite],
//     callback
//   )
//   connectionEnded()
// }
//
// function insertNewLine (idSite, product, callback) {
//   let date = new Date().toISOString().slice(0, 10)
//   let time = new Date().toISOString().slice(11, 19)
//
//   createConnection().query(
//     'INSERT INTO Production_Lines (idSite, productionRate, product , date, time) VALUES (?,0,?,?,?)',
//     [idSite, product, date, time],
//     callback
//   )
//   connectionEnded()
// }
//
// function updateLine (newProductionRate, idLine, callback) {
//   createConnection().query(
//     'UPDATE Production_Lines SET productionRate = ? WHERE idLine = ?',
//     [newProductionRate, idLine],
//     callback)
//   connectionEnded()
// }

function storeHashedPassword (hash, username, callback) {
  createConnection().query(
    'UPDATE USERS SET HASH = ? WHERE USERNAME = ?',
    [hash, username],
    callback)
  connectionEnded()
}

function storeToken (token, username, callback) {
  createConnection().query(
    'UPDATE USERS SET token = ? WHERE USERNAME = ?',
    [token, username],
    callback)
  connectionEnded()
}

function askHashPasswordDB (username, callback) {
  createConnection().query(
    'SELECT (hash) FROM USERS WHERE username = ?',
    [username],
    callback)
  connectionEnded()
}

function createNewUser (username, callback) {
  createConnection().query(
    'INSERT INTO USERS (username) VALUE (?)',
    [username],
    callback)
  connectionEnded()
}

function connectionEnded () {
  let connection = mysql.createConnection(infoDB)
  connection.end()
  console.log('disconnected')
}

module.exports = {
  storeHashedPassword: storeHashedPassword,
  askHashPasswordDB: askHashPasswordDB,
  createNewUser: createNewUser,
  storeToken: storeToken,
}
