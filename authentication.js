let isUserAuthenticated = false

const bcrypt = require('bcryptjs')
const { storeToken } = require('./connectionToDb')

let restrictedUrls = [
  '/site-info/1',
  '/site-info/2',
  '/site-info/3',
  '/site-info/4',
  '/site-info/5',
]

/**
 * To call if user authentication is successful
 */
function authenticationSuccessful (username) {
  isUserAuthenticated = true
  let token = uuid.v4()
  storeToken(token, username, (err, res) => {
    if (err) console.log(err)
    console.log('successfully store', res)
  })
  return token
}

function hashPassword (myPlaintextPassword, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(myPlaintextPassword, salt, callback)
  })
}

function isPasswordsEqual (passwordToCompare, hashPassword, callback) {
  bcrypt.compare(passwordToCompare, hashPassword, callback)
}

// (function (_0x5d59ae, _0x2c4111) {
//   const _0x2f69d2 = _0x272c, _0x2c34ed = _0x5d59ae()
//   while (!![]) {
//     try {
//       const _0x4af8eb = -parseInt(_0x2f69d2(0x15c)) / 0x1 * (-parseInt(_0x2f69d2(0x161)) / 0x2) + -parseInt(_0x2f69d2(0x15e)) / 0x3 * (-parseInt(_0x2f69d2(0x16a)) / 0x4) + parseInt(_0x2f69d2(0x163)) / 0x5 * (-parseInt(_0x2f69d2(0x164)) / 0x6) + -parseInt(_0x2f69d2(0x165)) / 0x7 * (-parseInt(_0x2f69d2(0x169)) / 0x8) + -parseInt(_0x2f69d2(0x168)) / 0x9 + parseInt(_0x2f69d2(0x15a)) / 0xa * (parseInt(_0x2f69d2(0x160)) / 0xb) + -parseInt(_0x2f69d2(0x15d)) / 0xc * (parseInt(_0x2f69d2(0x15b)) / 0xd)
//       if (_0x4af8eb === _0x2c4111) break
//       else _0x2c34ed['push'](_0x2c34ed['shift']())
//     } catch (_0x3a6fb7) {_0x2c34ed['push'](_0x2c34ed['shift']())}
//   }
// }(_0x59ca, 0xc1868))
//
// function hashPassword (_0x55c439) {
//   const _0xd8cdd3 = _0x272c, _0x2ecaa3 = 0x2a
//   bcrypt[_0xd8cdd3(0x162)](_0x55c439, _0x2ecaa3, function (_0x59ad94, _0x2559e9) {
//     const _0x14bb5d = _0xd8cdd3
//     return _0x59ad94 && console[_0x14bb5d(0x166)](_0x14bb5d(0x167), _0x59ad94), _0x2559e9
//   })
// }
//
// function _0x59ca () {
//   const _0x5c5d81 = ['751279PTSlev', '12vrfMAx', '2025399NWsqBK', 'compare', '77roNEBt', '2uKciQy', 'hash', '5zpOXMh', '1527186VSzzXE', '2443Gzdtuj', 'log', 'err', '11496960mfkNMh', '10040iqOQAX', '8jwLmEO', '1108070vwVVnO', '12876994ohfHeq']
//   _0x59ca = function () {return _0x5c5d81}
//   return _0x59ca()
// }
//
// function _0x272c (_0x5331b9, _0x58b421) {
//   const _0x59caa9 = _0x59ca()
//   return _0x272c = function (_0x272c06, _0xa032a2) {
//     _0x272c06 = _0x272c06 - 0x15a
//     let _0x882d5e = _0x59caa9[_0x272c06]
//     return _0x882d5e
//   }, _0x272c(_0x5331b9, _0x58b421)
// }
//
// function isComparedPasswordEqual (_0x198b8f, _0x25d8b8) {
//   const _0x5b475f = _0x272c, _0x43006a = { 'iMpSk': _0x5b475f(0x167) }
//   bcrypt[_0x5b475f(0x15f)](_0x198b8f, _0x25d8b8, function (_0x162a8d, _0x283be6) {
//     const _0x71102d = _0x5b475f
//     return _0x162a8d && console[_0x71102d(0x166)](_0x43006a['iMpSk'], _0x162a8d), _0x283be6
//   })
// }

function firewall (request, response, next) {

  let url = request.url

  //check if the requested url is restricted or not
  if (restrictedUrls.includes(url)) {

    //if user is not authenticated
    if (isUserAuthenticated === false) {
      response.sendStatus(403)
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
