const User = require('../models/user')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
  let token = req.headers.authorization.replace('Bearer ', '')
  console.log('token', token)
  let userInfo = jwt.verify(token, process.env.TOKEN_SECRET)
  console.log('userInfo', userInfo)
  User.findById(userInfo._id).select('-__v')
  .then(user => res.send(user))
  .catch(err => console.log(err))
}